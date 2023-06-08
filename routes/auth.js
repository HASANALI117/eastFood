const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/auth/signup',authController.auth_signup_get)
router.get('/auth/signin',authController.auth_signin_get)
router.post('/auth/signup',authController.auth_signup_post)
router.post('/auth/signin',authController.auth_signin_post)
router.get('/auth/logout',authController.auth_logout_get)

module.exports = router