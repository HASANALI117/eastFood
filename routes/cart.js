const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cart')

router.post('/cart',cartController.cart_add_get)
router.get('/cart',cartController.cart_creat_get)
router.put('/cart/:id',cartController.cart_update_get)
router.delete('/cart/:id',cartController.cart_delete_get)

module.exports = router