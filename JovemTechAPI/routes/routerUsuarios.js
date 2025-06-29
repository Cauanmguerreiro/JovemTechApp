import express from 'express'
const router = express.Router()
import { criarUsuario, logarUsuario } from '../controller/usuariosController.js' 

router.post('/registrar', criarUsuario)

router.post('/login', logarUsuario)


export default router