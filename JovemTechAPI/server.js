import express from 'express'
const app = express()    
const port = 3000;

import cors from 'cors'
import routerUsuarios from './routes/routerUsuarios.js'
import routerAtividades from './routes/routerAtividades.js'

app.use(cors({
    origin: 'http://localhost:9000'
}));
app.use(express.json());
app.use('/usuarios', routerUsuarios)
app.use('/atividades', routerAtividades)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

