import express from 'express'
const router = express.Router()
import { criarAtividadeController, buscarAtividadesController } from '../controller/atividadesController.js'


router.post('/', criarAtividadeController);
router.get('/', buscarAtividadesController);



export default router