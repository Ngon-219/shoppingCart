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
        // console.log(productId);
        const index = cart.products.findIndex(p => p.id == productId);
        // cart.totalprice -= products[index].price;
        // console.log(index);
        if(index >= 0) {
            console.log(cart.products[index].price);
            const prod = cart.products[index];
            cart.totalprice -= prod.price * prod.qty;
            // cart.totalprice -= cart.products[index].price * cart.prodcuts[index].qty;
            cart.products.splice(index, 1);
        }
    }

}