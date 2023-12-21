const mongoose = require('mongoose');

//schema - define the structurr
    // schema - mongoose.model
    //     using Model we do CRUD operstion


        mongoose.connect('mongodb://localhost:27017/shoppingOnline')
        .then(()=>console.log('connected..'))
        .catch((err) => console.log(err));
//Schema 
const prodSchema = new mongoose.Schema ({
    id: {
        type: Number,
        require: true,
        unique: true,
    },
    title: {
        type: String,
        require: true,
        unique:false,
    },
    price: {
        type: Number,
        require: true,
    },
    imageURL: {
        type: String,
    },
    description: {
        type: String,
    } 
});


const Prod = mongoose.model('Product', prodSchema);

async function Test() {
    const result = await Prod.create({
        id: 13, 
        title: "Nha Gia Kim",
        price: 25,
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2F",
        description: "good",
    });
    console.log(result);
}
Test();

async function showTest() {
    const allProduct = await Prod.find();
    console.log(allProduct);
}

showTest();