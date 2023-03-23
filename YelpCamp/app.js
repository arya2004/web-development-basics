const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connectef")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', ejsMate)


app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/campgrounds', async (req,res)=>{
    const campgrounds = await Campground.find({})

    res.render('campgrounds/index', {campgrounds})
})

app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
})

app.post('/campgrounds', async (req,res, next)=>{
    try {
        const campground = new Campground(req.body.campground)
        await campground.save()
        res.redirect(`/campgrounds/${campground._id}`)
    } catch (error) {
        next(error);
    }

})



app.get('/campgrounds/:id', async (req,res)=>{
    const campground = await Campground.findById(req.params.id)

    res.render('campgrounds/show', {campground})
})



app.put('/campgrounds/:id/', async (req,res)=>{
    const { id }  = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground)
    res.redirect(`/campgrounds/${campground._id}`)

})


app.get('/campgrounds/:id/edit', async (req,res)=>{
    const campground = await Campground.findById(req.params.id)

    res.render('campgrounds/edit', {campground})
})

app.delete('/campgrounds/:id',async (req,res)=>{
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

app.use((err,req,res, next)=>{
    res.send('fFFFFFFFFffFFFffFFF')
})

app.listen(3000,()=>{
    console.log('sucsex')
})