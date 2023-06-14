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
    console.log(products)
    res.render('mainDishes/mainDishes', {products})
  }
  catch (err) {
    console.log(err)
    console.log("Error Loading mainDishes")
  }
}



exports.mainDishes_post = (req, res) => {
    fs.readFile('items.json', function(error, data) {
      if (error) {
        res.status(500).end()
      } else {
        const itemsJson = JSON.parse(data)
        const itemsArray = itemsJson.items.concat(itemsJson.merch)
        let total = 0
        req.body.items.forEach(function(item) {
          const itemJson = itemsArray.find(function(i) {
            return i.id == item.id
          })
          total = total + itemJson.price * item.quantity
        })
  
      }
    })
  }


exports.drinks_get = (req, res) => {
  res.render("Drinks/drinks");
};
