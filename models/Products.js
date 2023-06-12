const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);
