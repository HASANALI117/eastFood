const express=require('express')
const router = express.Router()
const sweetController=require('../controllers/dessertDev')

router.get('/',sweetController.dessertDev_get)


module.exports=router