const products =[];

class Product {

    constructor(id, title, price, imageURL, description){
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        this.id = Math.floor(Math.random() *1000000);
        products.push(this);
    }

    static findAll() {
        return products;
    }

    static findById(prodID) {
        return products.filter( p => p.id == prodID);
    }
}

module.exports = Product;