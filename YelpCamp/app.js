const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
//const methodOverride = require('method-override')

mongoose.connect()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('home')
})






app.listen(3000,()=>{
    console.log('sucsex')
})