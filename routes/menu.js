const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menu");

router.get("/desserts", menuController.desserts_get);
router.get("/mainDishes", menuController.mainDishes_get);
router.get("/drinks", menuController.drinks_get);

module.exports = router;
