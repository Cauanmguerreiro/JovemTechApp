import { auth, db } from '../firebase.js'; 

const authenticator = {

  register: async (nome, data_nascimento, email, senha, onSuccess, onError) => {
    try {
      
      const user = await auth.createUser({
        email,
        password: senha,
        displayName: nome,
      });
      await db.collection('usuarios').doc(user.uid).set({
        nome,
        data_nascimento,
        email,
        criado_em: new Date()
      });


      console.log('Usuário criado com sucesso!');
      onSuccess(user);
    } catch (error) {
      console.error('Erro ao registrar:', error.code, error.message);
      onError(error.code, error.message);
    }


  },


};

export default authenticator;
