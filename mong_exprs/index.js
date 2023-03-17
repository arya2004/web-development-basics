const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/products.js')
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("nopeee")
        console.log(err)
    })


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.get('/',(req,res)=>{

    
    res.send('home');
})

app.get('/products', async(req,res)=>{
   const products = await Product.find({})
   //console.log(products);
    //res.send('prd here');
    res.render('products/index', {products})
})

app.get('/products/new', async(req,res)=>{
    //const products = await Product.find({})
    //console.log(products);
     //res.send('prd here');
     res.render('products/new')
 })

app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save();
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})


app.get('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product})
})



app.get('/products/:id/edit',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product})
})

app.put('/products/:id', async(req,res)=>{
    console.log(req.body)
 res.send("put")
})


app.delete('/products/:id', async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})






app.listen(3000,()=>{
    console.log("300 wors");
})