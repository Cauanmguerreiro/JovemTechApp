import express from 'express'
const app = express()    
const port = 3000;

import routerLogin from './routes/routerLogin.js'
import routerAtividades from './routes/routerAtividades.js'

app.use(express.json());
app.use('/login', routerLogin)
app.use('/atividades', routerAtividades)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})