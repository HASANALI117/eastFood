const express=require('express')
const router=express.Router()
const drinksController=require('../controllers/drinkDev')

router.get('/', drinksController.drinkDev_get)

module.exports=router