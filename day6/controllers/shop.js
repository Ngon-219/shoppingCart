const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    console.log(products);
    res.render('index', {name: "Ngon", title: "Shop Homepage", prods: products, path: "/"});
}

exports.getProductDetail = (req, res, next) => {
    const prodID = req.params.prodID;
    const product = Product.findById(prodID);
    console.log(product);
    res.render('product-detail', {prod: product[0], title: 'Product Detail', path: '/product/:prodID', name: 'Ngon'});
    //render detail here
}