const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/admin", adminController.index_get);
router.get("/admin/products", adminController.product);
router.get("/admin/products/add-product", adminController.add_product_get);
// router.post("/admin/products/add-product", adminController.add_product_post);

module.exports = router;
