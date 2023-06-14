const CartItem = require('../models/Cart')

exports.cart_add_get = async (req, res) => {
    try {
      const { name, price, quantity } = req.body;
  
      const cartItem = new CartItem({
        name : req.body.products.name,
        price: req.body.products.price,
        quantity: req.body.products.quantity,
      })
  
      await cartItem.save()
  
      res.status(201).json({ message: 'Item added to cart1' })
    } catch (error) {
        console.log(error.message)
    }
  }
  exports.cart_creat_get = async (req, res) => {
    try {
      CartItem.find()
      .then((cartItems) => {
        res.render('cart/cart', { cartItems })
      })
    }  catch (error) {
      console.log(error.message)
  }
}

  

  exports.cart_update_get = async (req, res) => {
    try {
      const { id } = req.params
      const { quantity } = req.body
  
      await CartItem.findByIdAndUpdate(id, { quantity })
  
      res.status(200).json({ message: 'Item quantity updated' })
    } catch (error) {
        console.log(error.message)
    }
  }
  exports.cart_delete_get = async (req, res) => {
    try {
      const { id } = req.params
  
      await CartItem.findByIdAndDelete(id)
  
      res.status(200).json({ message: 'Item removed from cart' })
    } catch (error) {
        console.log(error.message)
    }
  }
  