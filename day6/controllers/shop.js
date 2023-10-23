const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    res.render('index', {name: "Ngon", title: "Shop Homepage", prods: products, path: "/"});
}