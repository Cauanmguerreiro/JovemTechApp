import express from 'express'
const router = express.Router()

router.get('/', (req, res)  =>{
    console.log('teste')
})

export default router