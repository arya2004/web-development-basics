const mongoose = require('mongoose');
const Product = require('./models/products.js')


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("nopeee")
        console.log(err)
    })

// const p = new Product({
//     name: 'Mango',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p=>{
//         console.log(p);
//     })
//     .catch(e =>{
//         console.log(e)
//     })

const seedProducts = [{
    name: 'Milk',
    price: 1.00,
    category: 'dairy'
},
{
    name: 'Straberry',
    price: 3.99,
    category: 'fruit'
},
{
    name: 'Spinach',
    price: 0.79,
    category: 'vegetable'
},
{
    name: 'Cheese',
    price: 3.99,
    category: 'dairy'
}]
//if one fails validation, then not inserted
Product.insertMany(seedProducts)
    .then(p=>{
        console.log(p);
    })
    .catch(e =>{
        console.log(e)
    })