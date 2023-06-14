const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    totalPrice:{
    type:Number,
    } ,
    // quantity:{
    // type:Number,     
    // },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }] 
  });
  
  const Cart = mongoose.model('Cart', cartSchema)

  module.exports = Cart;
