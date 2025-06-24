import authenticator from "../services/authenticator.js"

export function criarUsuario(req, res){
    const {nome, data_nascimento, email, senha} = req.body

    authenticator.register(
        nome, 
        data_nascimento,
        email,
        senha,
        (user) => {
            res.status(201).send('Usuário criado com sucesso!')
        },
        (errorCode, errorMessage) => {
            res.status(400).json({ error: errorMessage, code: errorCode });
        }
    )
}

// export async function logarUsuario(req, res){
//         const { email, senha } = req.body;

//     if (!email || !senha) {
//         return res.status(400).json({ error: 'Email e senha são obrigatórios' });
//     }

//     try {
//         const user = await authenticator.loginEmailSenha(email, senha);
        
//     } catch (error) {
//         console.error('Erro no login:', error);
//         res.status(401).json({ error: 'Email ou senha inválidos' });
//     }
// }