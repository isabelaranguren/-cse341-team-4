const path = require('path');

const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();


router.get('/', productController.getProducts);

router.get('/products/:productId', productController.getProduct);

module.exports = router;
