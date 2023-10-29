const express = require('express');
const fs = require('fs');
const path = require('path');
const adminController = require('../controllers/admin.js');
const router = express.Router();


router.get('/add-product', adminController.getProductForm);

router.post('/add-product', adminController.postProduct);

router.get('/edit-product/:prodID', adminController.editProductPage);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.deleteProduct);


module.exports = router;