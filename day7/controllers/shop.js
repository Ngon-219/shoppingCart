const Product = require('../models/product');
const Cart = require('../models/cart');
const database = require('../util/database');

exports.getAllProducts = async(req, res, next) => {
    const products = await database.Product.find();
    // console.log(products);
    res.render('index', {name: "Ngon", title: "Shop Homepage", prods: products, path: "/"});
}

exports.getProductDetail = async (req, res, next) => {
    const prodID = req.params.prodID;
    const product = await database.Product.find({"id": prodID});
    console.log(product);
    res.render('product-detail', {prod: product[0], title: 'Product Detail', path: '/product/:prodID', name: 'Ngon'});
    //render detail here
}

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    Cart.save(addedProduct);
    console.log(Cart.getCart());
    res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    res.render('cart', {title: 'Cart', path:'/cart', name: 'Ngon', cart: Cart.getCart() });
}

exports.deleteInCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}