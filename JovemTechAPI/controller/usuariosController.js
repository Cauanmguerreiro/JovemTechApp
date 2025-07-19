import authenticator from "../services/authenticator.js"
import { logout, getUsuario } from "../services/authenticator.js"
import { auth } from '../firebase.js';
import { format, parseISO } from 'date-fns'



export async function criarUsuario(req, res) {
    const { nome, data_nascimento, email, senha, instituicao, cargo } = req.body;

    const camposPermitidos = ['nome', 'data_nascimento', 'email', 'senha', 'instituicao', 'cargo'];
    const camposRecebidos = Object.keys(req.body);

    const camposInvalidos = camposRecebidos.filter(campo => !camposPermitidos.includes(campo));

    if (camposInvalidos.length > 0) {
        return res.status(400).json({ error: 'Algum campo inválido foi inserido', camposInvalidos });
    }

    try {


        await authenticator.register(
            nome,
            data_nascimento,
            email,
            senha,
            instituicao,
            cargo
        );

        res.status(201).send('Usuário criado com sucesso!')
    } catch (error) {
        if (error.code === 'auth/email-already-exists') {
            return res.status(409).json({ error: 'E‑mail já cadastrado' });
        }
        return res.status(500).json({ error: 'Erro interno ao criar usuário' });
    }
}



export async function logarUsuario(req, res) {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
        const token = await authenticator.login(email, senha);
        console.log('logado')
        return res.status(200).send({
            mensagem: 'Usuário logado com sucesso!',
            token
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(401).json({ error: 'Email ou senha inválidos' });
    }
}

export async function sair(req, res) {
try{
    const uid = req.body.uid
    await logout(uid);
    res.status(200).send('Usuário deslogado com sucesso');
}catch(error){
    res.status(500).send('Ocorreu um erro ao deslogar usuário')
}
}

export async function verUsuario(req, res){
    try{
    const id = req.params.id
    const usuario = await getUsuario(id)

    if (usuario && usuario.data_nascimento) {
      // Se data_nascimento for string ISO, transforma e formata
    usuario.data_nascimento = format(parseISO(usuario.data_nascimento), 'dd/MM/yyyy')
    }
    res.status(200).send(usuario);
    } catch(error){
    console.log(error)
    res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}