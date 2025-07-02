import { auth, db } from '../firebase.js';
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

const chaveSecreta = process.env.JWT_SECRET
const authenticator = {

  register: async (nome, data_nascimento, email, senha, onSuccess, onError) => {
    try {

      const user = await auth.createUser({
        email,
        password: senha,
        displayName: nome,
      });
      const senhaHash = await bcrypt.hash(senha, 10);
      await db.collection('usuarios').doc(user.uid).set({
        nome,
        data_nascimento,
        email,
        senhaHash,
        criado_em: new Date()
      });


      console.log('Usuário criado com sucesso!');
      onSuccess(user);
    } catch (error) {
      console.error('Erro ao registrar:', error.code, error.message);
      onError(error.code, error.message);
    }
  },
  login: async (email, senha) => {
    const userSnap = await db.collection('usuarios').where('email', '==', email).limit(1).get();
    const userData = userSnap.docs[0].data();

    const token = jwt.sign({ uid: userSnap.docs[0].id, email: userData.email }, chaveSecreta, {
      expiresIn: '1h'
    })
    const compare = bcrypt.compare(senha, userData.senhaHash)
    if (!compare) {
      throw new Error('Senha incorreta');
    }
    return { token }
  }
}
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, chaveSecreta, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado' });
    }
    req.user = payload;
    next();
  });
}

export default authenticator;
