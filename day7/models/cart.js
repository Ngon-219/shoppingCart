let cart = null;
module.exports = class Cart {

    static save(product) {
        if(cart) {
            const index = cart.products.findIndex(p => p.id == product.id);
            if(index == -1) {
                product.qty = 1;
                cart.products.push(product);
                cart.totalprice += product.price;
            }else {
                cart.products[index].qty +=1;
                // const existingqty = existingProduct.qty;
                // existingProduct.qty = existingqty + 1;
                cart.totalprice += product.price;
            }
            
        }else {
            cart = {products: [], totalprice: 0};

            product.qty = 1;
            cart.products.push(product);
            cart.totalprice = product.price;
        }
    }

    static getCart() {
        return cart;
    }

    static delete(productId) {
        const products = cart.products;
        const index = products.findIndex(p => p.id == productId);
        
    }

}