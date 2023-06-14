const express=require('express')
const router=express.Router()
const mainController=require('../controllers/mainDev')

router.get('/',mainController.mainDev_get)

module.exports=router