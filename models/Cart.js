const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    
    name: String,
    price: Number,
    quantity: Number,  
       
  });
  
  const CartItem = mongoose.model('CartItem', cartItemSchema)

  module.exports = CartItem;
