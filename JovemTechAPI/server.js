import express from 'express'
const app = express()    
const port = 3000;

import routerUsuarios from './routes/routerUsuarios.js'
import routerAtividades from './routes/routerAtividades.js'

app.use(express.json());
app.use('/usuarios', routerUsuarios)
app.use('/atividades', routerAtividades)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})