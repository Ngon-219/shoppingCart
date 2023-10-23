const Product = require('../models/product')

exports.getProductForm = (req, res, next) => {
    res.render('add-product', {name: "Ngon", title: "Add Product", path: '/admin/add-product'});
}

exports.postProduct = (req, res, next) => {
    console.log('save product....');
    console.log(req.body);
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    const prod = new Product(title, price, imageURL, description);
    prod.save();

    console.log(Product.findAll());
    console.log('save product successfully');
    res.redirect('/');
}


