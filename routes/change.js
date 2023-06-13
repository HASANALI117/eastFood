const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')

const changeController=require('../controllers/profile')
router.get('/profile/changePass', changeController.user_changePass_get)
router.post('/profile/changePass', changeController.user_changePass_post)

// router.get('/profile/detail',changeController.user_edit_get)

module.exports=router