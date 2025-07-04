import authenticator from "../services/authenticator.js"



export async function criarUsuario(req, res) {
    const { nome, data_nascimento, email, senha, instituicao } = req.body;
    if (!nome || !data_nascimento || !email || !senha || !instituicao) {
        return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' })
    }

    try {


        await authenticator.register(
            nome,
            data_nascimento,
            email,
            senha,
            instituicao,



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