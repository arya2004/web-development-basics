const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Pulse = require('./models/pulse.js')
const Patient = require('./models/patient.js')
const methodOverride = require('method-override')

const db = mongoose.connect('mongodb://127.0.0.1:27017/mts')
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



app.get('/farms', async(req,res)=>{
    const farms = await Farm.find({})
    res.render('farms/index', {farms})
})

app.get('/farms/new', (req,res) =>{
    res.render('farms/new')
})

app.get('/farms/:id', async (req,res) =>{
    const farm = await Farm.findById(req.params.id)
    res.render('farms/show', {farm})
})


app.post('/farms',async (req,res) =>{
    const farm = new Farm(req.body)
    await farm.save();
    res.redirect('/farms')
})
app.get('/farms/:id/products/new', async(req,res)=>{
    
    res.render('products/new')
})

app.post('/', async(req, res)=>{
    const pulse = new Pulse()
    const date = new Date();
    pulse.calculated_at = date.getTime()
    pulse.pulse = 287;
    pulse.metadata.patient = "644a08fffdb6e362264eba47"
    const test = await Patient.findById("644a08fffdb6e362264eba47")
    today = new Date()
days = 86400000 //number of milliseconds in a day
let d=new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000))
console.log(d < today.getTime())    
    await pulse.save()
    test.pulse.push(pulse)
    test.save();
    res.send(d )
})

app.post('/ppt', async(req, res)=>{
    const patient = new Patient();
     patient.name = "test";
     patient.save();
    res.send("23456")
})


// app.get('/products', async(req,res)=>{
//    const products = await Product.find({})
//    //console.log(products);
//     //res.send('prd here');
//     res.render('products/index', {products})
// })

// app.get('/products/new', async(req,res)=>{
//     //const products = await Product.find({})
//     //console.log(products);
//      //res.send('prd here');
//      res.render('products/new')
//  })

// app.post('/products',async (req,res)=>{
//     const newProduct = new Product(req.body)
//     await newProduct.save();
//     console.log(newProduct)
//     res.redirect(`/products/${newProduct._id}`)
// })


// app.get('/products/:id',async(req,res)=>{
//     const {id} = req.params;
//     const product = await Product.findById(id);
//     res.render('products/show', {product})
// })



// app.get('/products/:id/edit',async(req,res)=>{
//     const {id} = req.params;
//     const product = await Product.findById(id);
//     res.render('products/edit', {product})
// })

// app.put('/products/:id', async(req,res)=>{
//     console.log(req.body)
//  res.send("put")
// })


// app.delete('/products/:id', async(req,res)=>{
//     const {id} = req.params;
//     await Product.findByIdAndDelete(id)
//     res.redirect('/products')
// })






app.listen(3000,()=>{
    console.log("300 wors");
})