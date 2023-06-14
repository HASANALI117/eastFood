const express = require('express')
const router = express.Router()
const multer = require("multer");


const productController = require('../controllers/product')


// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  var upload = multer({ storage: storage })

router.get('/products', productController.productController_get)
router.post('/products', productController.productController_post)
router.post("/upload",upload.single('image'), productController.uploadController_post)
router.get('/upload', productController.uploadController_get)
router.get('/index', productController.detailsController_get)
router.get('/details', productController.product_detail_get)

module.exports = router;