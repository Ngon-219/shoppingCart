const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingCart')
.then(() => console.log('connected..'))
.catch((err) => console.log('fail to connect', err));


const prodSchema = ({
    id: {
        type: String,
        require: true,
        unique: true
    }, 
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    imageURL: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
});


const Prod = mongoose.model('products', prodSchema);

async function createProd(id, title, price, imageURL, description) {
    const product = await Prod.create ({
        id: id,
        title: title,
        price:price, 
        imageURL: imageURL,
        description: description,
    });
}

async function updateProd (id, title, price, imageURL, description) {
    const product = await Prod.updateOne(id, )
}

async function findAll(){
    const allProduct = await Prod.find();
    console.log(allProduct);
}

async function findOneAndUpdate(id, title, price, imageURL, description) {
    // console.log('in edit', id);
    // console.log('in edit', title);
    // console.log('in edit', price);
    // console.log('in edit', imageURL);
    // console.log('in edit', description);
    await Prod.updateOne({id: id}, {title: title, price: price, imageURL: imageURL, description: description});
}

async function findById(id) {
    const product = await Prod.find({"id": id});
    return product;
} 


async function deleteOne(id) {
    await Prod.deleteOne({id: id});
}



module.exports = {
    Prod: createProd,
    Product: Prod,
    showAll: findAll,
    update: findOneAndUpdate,
    find: findById,
    delete: deleteOne
}