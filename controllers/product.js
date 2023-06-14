var Product = require('../models/Products');
const path = require('path');
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// GET all products
// exports.productController_get = async (req, res) => {
//   try {
//     const products = await Product.find()
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' })
//   }
// }

exports.productController_get = async (req, res) => {
    try {
      const products = await Product.find();
      res.render('Product/product', {products}); // Pass the products data to the EJS template
    } catch (error) {
      console.log(error.message);
      res.send('Something went wrong 1');
    }
  };
// POST a new product
exports.productController_post = async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name : req.body.product.name,
      price: req.body.product.price
    })

    await product.save()

    
  } catch (error) {
    console.log(error.message);
    res.send('Something went wrong 2');
  }
}
exports.uploadController_get = (req,res)=>{
  res.render("Upload/upload");
}


exports.uploadController_post = (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString('base64');
  var final_img = {
    contentType: req.file.mimetype,
    image: Buffer.from(encode_img, 'base64')
  };

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    img: final_img
  });

  product.save()
    .then(() => {
      console.log("Saved to database");
      res.redirect('/products'); // Redirect to the products page after successful upload
    })
    .catch((error) => {
      console.log(error);
      res.send('Something went wrong');
    });
};
// exports.uploadController_post = async (req, res) => {
//   try {
//     const img = fs.readFileSync(req.file.path);
//     const encode_img = img.toString('base64');
//     const final_img = {
//       contentType: req.file.mimetype,
//       image: Buffer.from(encode_img, 'base64')
//     };

//     const result = await Product.create(final_img);
//     console.log(result.image.buffer);
//     console.log('Saved to database');
//     res.contentType(final_img.contentType);
//     res.send(final_img.image);
//   } catch (error) {
//     console.log(error);
//     res.send('Something went wrong 2');
//   }
// };


