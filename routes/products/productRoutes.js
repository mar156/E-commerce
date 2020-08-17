const express = require('express');
const router = express.Router();
const path = require('path');
const productController= require(path.join(__dirname, '/../../controllers/products/productController'));


router.get('/', productController.index)
router.get('/:id', productController.show)
router.get('/create', productController.create)
router.get('/edit/:id', productController.edit)


module.exports = router;