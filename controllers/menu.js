exports.desserts_get = (req, res) => {
  res.render("Desserts/desserts");
};

exports.mainDishes_get = (req, res) => {
  res.render("mainDishes/mainDishes");
};

exports.drinks_get = (req, res) => {
  res.render("Drinks/drinks");
};
