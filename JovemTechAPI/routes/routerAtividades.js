import express from 'express'
const router = express.Router()
import { criarAtividadeController } from '../controller/atividadesController.js'


router.post('/', criarAtividadeController)



export default router