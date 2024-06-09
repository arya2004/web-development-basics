const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError')
const Review = require('../models/review');
const review = require('../models/review');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router.get('/', catchAsync( async (req,res,next)=>{
    try{
    const campgrounds = await Campground.find({})
    res.render('./campgrounds/index', {campgrounds})
    } catch(e){
        next(e)
    }
}))

router.get('/new', (req,res)=>{
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
       return res.render('./users/login')
    }
    res.render('./campgrounds/new');
})


router.post('/',upload.single('image'),catchAsync( async (req,res, next)=>{
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    const campground = new Campground(req.body.campground);
    campground.images =req.files.map(f =>({path: f.path, filename: f.filename}));
    if(!req.body.campground) throw new ExpressError('Invalid', 400); 
        campground.author = req.user._id;
        await campground.save()
        req.flash('success', 'done')
        console.log(req.body, req.file)
        res.redirect(`./campgrounds/${campground._id}`)
    }

))



router.get('/:id',catchAsync( async (req,res)=>{
    const campground = await Campground.findById(req.params.id).populate('reviews').populate('author');//populate to get author and reviews
   

    res.render('./campgrounds/show', {campground })
}))

router.get('/:id/edit',catchAsync(  async (req,res)=>{
    const { id }  = req.params;
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    
    const campground = await Campground.findById(req.params.id)
    if(!campground.author.equals(req.user._id))
    {
        req.flash('error',"not allowed");
        return res.redirect(`/campgrounds/${id}`);
    }

    res.render('./campgrounds/edit', {campground})
}))

router.put('/:id/',catchAsync(  async (req,res)=>{
    
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    const { id }  = req.params
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id))
    {
        req.flash('error',"not allowed");
        return res.redirect(`/campgrounds/${id}`);
    }
    const camp = await Campground.findByIdAndUpdate(id, req.body.campground)
    res.redirect(`./campgrounds/${camp._id}`)

}))

router.delete('/:id',catchAsync( async (req,res)=>{
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id))
    {
        req.flash('error',"not allowed");
        return res.redirect(`/campgrounds/${id}`);
    }
    await Campground.findByIdAndDelete(id);
    res.redirect('./');
}))

module.exports = router;