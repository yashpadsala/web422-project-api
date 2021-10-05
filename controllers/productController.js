var express = require('express')
var router = express.Router()

const productService = require('../services/productService.js');

router.get("", productService.getAllProducts);

router.get("/:id", productService.getAProduct);

router.post("", productService.createAProduct);

router.put("/:id", productService.updateAProduct);

router.delete("/:id", productService.deleteAProduct);

module.exports = router