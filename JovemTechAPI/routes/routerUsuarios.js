import express from 'express'
const router = express.Router()
import { criarUsuario } from '../controller/usuariosController.js' 

router.post('/registrar', criarUsuario)


export default router