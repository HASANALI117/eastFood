const CartItem = require('../models/Cart')

exports.cart_add_get = async (req, res) => {
    try {
      const { name, price, quantity } = req.body;
  
      const cartItem = new CartItem({
        name,
        price,
        quantity,
      })
  
      await cartItem.save()
  
      res.status(201).json({ message: 'Item added to cart' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error 1' })
    }
  }
  exports.cart_creat_get = async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error 2' })
    }
  }


  exports.cart_update_get = async (req, res) => {
    try {
      const { id } = req.params
      const { quantity } = req.body
  
      await CartItem.findByIdAndUpdate(id, { quantity })
  
      res.status(200).json({ message: 'Item quantity updated' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error 3' })
    }
  }
  exports.cart_delete_get = async (req, res) => {
    try {
      const { id } = req.params
  
      await CartItem.findByIdAndDelete(id)
  
      res.status(200).json({ message: 'Item removed from cart' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error 4' })
    }
  }
  