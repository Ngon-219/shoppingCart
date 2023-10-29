const products =[];

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
    }

    update() {
        const index = products.findIndex(p => p.id == this.id);
        products[index] = this;
    }

    static findAll() {
        return products;
    }

    static findById(prodID) {
        return products.filter( p => p.id == prodID);
    }

    static deleteById(prodID) {
        const index = products.findIndex(p => p.id == prodID);
        products.splice(index, 1);
    }
}

module.exports = Product;