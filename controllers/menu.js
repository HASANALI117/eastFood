const fs = require('fs')
const Product = require('../models/Products')

exports.desserts_get = (req, res) => {
  res.render("Desserts/desserts");
};

exports.mainDishes_get = async (req, res) => {
 
    // fs.readFile('items.json', function(error, data) {
    //   if (error) {
    //   console.log(error);
    //   } else {
    //     res.render("mainDishes/mainDishes", {
    //       items: JSON.parse(data)
    //     })
  
// }
// })

  try {
    const products = await Product.find()
    console.log('mainDishes Page ')
    res.render('mainDishes/mainDishes', {products})
  }
  catch (err) {
    console.log(err)
    console.log("Error Loading mainDishes")
  }
}



exports.mainDishes_post = async (req, res) => {
  try {
    const data = fs.readFileSync('items.json');
    const itemsJson = JSON.parse(data);
    const itemsArray = itemsJson.mainDishes.concat(
      itemsJson.Desserts,
      itemsJson.Drinks
    );
    let total = 0;

    if (!req.body.items || !Array.isArray(req.body.items)) {
      throw new Error('Invalid or missing items in the request body');
    }

    req.body.items.forEach(function (item) {
      const itemJson = itemsArray.find(function (i) {
        return i.id == item.id;
      });
      if (itemJson) {
        total = total + itemJson.price * item.quantity;
      }
    });

    // Create a new Product instance with required fields
    const newProduct = new Product({
      name: req.body.product.name,
      price: req.body.product.price,
    });

    // Save the newProduct
    await newProduct.save();
    // Handle successful save

    res.status(200).json({ message: 'Product saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error saving product' });
  }
};


exports.drinks_get = (req, res) => {
  res.render("Drinks/drinks");
};
