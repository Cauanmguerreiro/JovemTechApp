import express from 'express'
const router = express.Router()
import { criarUsuario, logarUsuario, sair } from '../controller/usuariosController.js' 
import { authenticateToken } from '../services/authenticator.js';

router.post('/registrar', criarUsuario)

router.post('/login', logarUsuario)

router.post('/logout', authenticateToken, sair);
export default router