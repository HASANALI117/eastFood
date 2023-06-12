const express = require('express')
const router = express.Router()
const userController = require('../controllers/profile')
const isLoggedIn = require('../lib/isLoggedIn')


// Call Our API
router.get('/user/edit', isLoggedIn ,userController.user_edit_get)
router.post('/user/edit', isLoggedIn ,userController.user_edit_post)
router.get('/user/index', isLoggedIn ,userController.user_index_get)


module.exports = router