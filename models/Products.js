const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
  },
  img:
  {
    data: Buffer,
    contentType: String
}
})

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;