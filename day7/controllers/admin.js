const Product = require('../models/product');
const database = require('../util/database').find;

exports.getProductForm = (req, res, next) => {
    res.render('add-product', {name: "Ngon", title: "Add Product", path: '/admin/add-product'});
}

exports.postProduct = (req, res, next) => {
    // console.log('save product....');
    // console.log(req.body);
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    const prod = new Product(null, title, price, imageURL, description);
    console.log(prod);
    prod.save();

    // console.log(Product.findAll());
    console.log('save product successfully');
    res.redirect('/');
}

exports.editProductPage = async (req, res, next) => {
    const id = req.params.prodID;
    const product = await database(id);
    // console.log(product);
    // const product = Product.findById(req.params.prodID);
    res.render('edit-product', {prod: product[0], name: "Ngon", title: "Edit Product", path: '/admin/edit-product'});
}

exports.postEditProduct = (req, res, next) => {
    const updateProduct = new Product(req.body.id, req.body.title, req.body.price, req.body.imageURL, req.body.description);
    updateProduct.update();
    res.redirect('/');
}

exports.deleteProduct = (req, res, next) => {
    // console.log(req.body.id);
    Product.deleteById(req.body.id);
    res.redirect('/');
}