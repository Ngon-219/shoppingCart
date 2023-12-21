const { showAll } = require('../util/database');

const products =[];
const Prod = require('../util/database').Prod;
const Products = require('../util/database').Product;
const showTest = require('../util/database').showAll;
const updateDb = require('../util/database').update
const delDb = require('../util/database').delete

class Product {

    constructor(id, title, price, imageURL, description){
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        this.id = Math.floor(Math.random() *1000000);
        products.push(this);
        Prod(this.id, this.title, this.price, this.imageURL, this.description);
    }

    async update() {
        await updateDb(this.id, this.title, this.price, this.imageURL, this.description);  
    }

    static async findAll() {
        return await Products.find();
    }

    static findById(prodID) {
        return products.filter( p => p.id == prodID);
    }

    static deleteById(prodID) {
        delDb(prodID);
    }
}

module.exports = Product;