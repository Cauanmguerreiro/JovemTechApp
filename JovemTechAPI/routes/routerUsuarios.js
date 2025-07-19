import express from 'express'
const router = express.Router()
import { criarUsuario, logarUsuario, verUsuario, sair } from '../controller/usuariosController.js' 
import { authenticateToken } from '../services/authenticator.js';


router.get('/:id', authenticateToken, verUsuario)

router.post('/registrar', criarUsuario)

router.post('/login', logarUsuario)

router.post('/logout', authenticateToken, sair);
export default router