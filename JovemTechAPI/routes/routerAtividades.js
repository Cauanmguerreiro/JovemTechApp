import express from 'express'
const router = express.Router()
import { criarAtividadeController, buscarAtividadesController } from '../controller/atividadesController.js'
import {authenticateToken} from '../services/authenticator.js';


router.post('/', authenticateToken, criarAtividadeController);
router.get('/', authenticateToken, buscarAtividadesController);

export default router