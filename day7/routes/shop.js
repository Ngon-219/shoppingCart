const express = require('express');
const path = require('path');
const shopController= require('../controllers/shop');

const router = express.Router();

router.all('/', shopController.getAllProducts);

router.get('/product/:prodID', shopController.getProductDetail)

router.post('/add-to-cart', shopController.addToCart);

router.get('/cart', shopController.getCart);

router.post('/delete-cart', shopController.deleteInCart);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;