var Product = require('../models/Products');
const path = require('path');
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

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
    const populatedProducts = products.map((product) => ({
      ...product._doc,
      img: product.img && product.img.data ? product.img.data.toString('base64') : null
    }));
    res.render('Product/product', { products: populatedProducts });
  } catch (error) {
    console.log(error.message);
    res.send('Something went wrong1');
  }
};
// POST a new product

exports.uploadController_get = (req,res)=>{
  res.render("Upload/upload");
}

exports.uploadController_post = async (req, res) => {
  try {
    const { name, price, desc } = req.body;
    const img = fs.readFileSync(req.file.path);
    const encode_img = img.toString('base64');

    const newProduct = new Product({
      name,
      price,
      desc,
      img: req.file.filename
    });

    await newProduct.save();
    console.log("Saved to database");
    res.redirect('/products');
  } catch (error) {
    console.log(error);
    res.send('Something went wrong2');
  }
};
// exports.uploadController_post = async(req, res) => {
//   var img = fs.readFileSync(req.file.path);
//   var encode_img = img.toString('base64');
//   var final_img = {
//     contentType: req.file.mimetype,
//     image: Buffer.from(encode_img, 'base64')
//   };

//   const newproduct = new Product({
//     name: req.body.name,
//     price: req.body.price,
//     desc: req.body.desc,
//     img: {
//       data: req.body.image.data,
//       contentType: req.body.image.contentType
//     }
//   })

//   try {
//       await newproduct.save()
//       console.log("Saved to database");
//       res.redirect('/products'); // Redirect to the products page after successful upload
//     }
//     catch(error)  {
//       console.log(error);
//       res.send('Something went wrong');
//     }
// };



exports.productController_post = async (req, res) => {
  try {
    // const { name, price } = req.body;

    const newproduct = new Product({
      name: req.body.product.name,
      price: req.body.product.price
    })

    await newproduct.save()

    
  } catch (error) {
    console.log(error.message);
    res.send('Something went wrong 3');
  }
}

exports.detailsController_get = async(req, res) => {
  try{
    const product = await Product.find().populate('users')
    console.log(product)
    res.render('Product/details', { product })
    // res.render('book/index', { books: books }) //does the same thing
} catch (error) {
    console.log(error.message)
    res.send('HMMMMM Something is not right')
}
}

exports.product_detail_get = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id).populate('users');
    res.render('Product/details', { product });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
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


