const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
//const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connectef")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/makecampground', async (req,res)=>{
    const camp = new Campground({
        title: 'my backyard',
        price: '231.321',
        description: 'kek',
        location: 'austin'
    })
    await camp.save();
    res.send(camp)
})





app.listen(3000,()=>{
    console.log('sucsex')
})