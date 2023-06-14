const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    
    name: {
    type: String,  
    } ,
    price:{
    type:Number,
    } ,
    quantity:{
    type:Number,     
    }  
       
  });
  
  const CartItem = mongoose.model('CartItem', cartItemSchema)

  module.exports = CartItem;
