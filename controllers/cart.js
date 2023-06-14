const Cart = require('../models/Cart')
const Product = require('../models/Products');
const User = require('../models/User');
const bodyParser = require("body-parser");
// exports.cart_add_get = async (req, res) => {
//     try {
//       const { name, price, quantity } = req.body;
  
//       const cart = new Cart({
//         name : req.body.name,
//         price: req.body.price,
//         quantity: req.body.quantity,
//       })
  
//       await cart.save()
  
//       res.status(201).json({ message: 'Item added to cart1' })
//     } catch (error) {
//         console.log(error.message)
//     }
//   }

exports.cart_add_get = async (req, res) => {
  try {
    const productId = req.body.productId;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cart = new Cart({
      user: req.user._id,
      products: [{ product: productId }], // Pass the product details as an array of objects
    });

    await cart.save();
    console.log(productId)

    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
exports.cart_creat_get = async (req, res) => {
  try {
    const cart = await Cart.find();
    console.log(cart)
    res.render('cart/cart', { products: cart });
  } catch (error) {
    console.log(error.message);
    res.send('Something went wrong');
  }
};

  

  exports.cart_update_get = async (req, res) => {
    try {
      const { id } = req.params.id
      const { quantity } = req.body.quantity
  
      await Cart.findByIdAndUpdate(id, { quantity })
  
      res.status(200).json({ message: 'Item quantity updated' })
    } catch (error) {
        console.log(error.message)
    }
  }
  exports.cart_delete_get = async (req, res) => {
    try {
      const { id } = req.params
  
      await Cart.findByIdAndDelete(id)
  
      res.status(200).json({ message: 'Item removed from cart' })
    } catch (error) {
        console.log(error.message)
    }
  }
  