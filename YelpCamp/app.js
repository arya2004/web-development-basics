const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError')
const Review = require('./models/review')
const session = require('express-session')
const flash = require('connect-flash')

const campgrounds = require('./routes/campgrounds.js')
const reviews = require('./routes/reviews.js')



mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))

const sessionConfig = {
    secret: 'thisshouldbeabetersectere',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires: Date.now() + (1000*60*60*24*7),
        maxAge: (1000*60*60*24*7)
    }

}


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connectef")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', ejsMate)

app.use(session(sessionConfig))
app.use(flash())
app.use((req,res,next) =>{
    res.locals.success = req.flash('success');
    next();
})
app.get('/', (req,res)=>{
    res.render('home')
})


app.use('/campgrounds', campgrounds)
app.use('/campgrounds/:id/reviews', reviews)

app.all('*',(req,res,next) =>{
     next(new ExpressError('not found', 404))
})


app.use((err,req,res, next)=>{
    const { statusCode = 500, message = 'dde'} = err;
    if (!err.message) err.message = 'default error'
    res.status(statusCode).render('error',{err})
})

app.listen(3000,()=>{
    console.log('sucsex')
})