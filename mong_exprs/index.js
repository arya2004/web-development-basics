const express = require('express');
const app = express();
const path = require('path');
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


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{

    
    res.send('home');
})

app.get('/catto',(req,res)=>{
    res.send('kitty');
})












app.listen(3000,()=>{
    console.log("300 wors");
})