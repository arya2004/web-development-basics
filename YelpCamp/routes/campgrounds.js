const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError')
const Review = require('../models/review')
const router = express.Router();



router.get('/', catchAsync( async (req,res,next)=>{
    try{
    const campgrounds = await Campground.find({})
    res.render('./campgrounds/index', {campgrounds})
    } catch(e){
        next(e)
    }
}))

router.get('/new', (req,res)=>{
    res.render('./campgrounds/new');
})


router.post('/campgrounds',catchAsync( async (req,res, next)=>{
    if(!req.body.campground) throw new ExpressError('Invalid', 400);
        const campground = new Campground(req.body.campground)
        await campground.save()
        res.redirect(`./campgrounds/${campground._id}`)
    }

))


router.get('/:id',catchAsync( async (req,res)=>{
    const campground = await Campground.findById(req.params.id).populate('reviews');
   

    res.render('./campgrounds/show', {campground})
}))

router.get('/:id/edit',catchAsync(  async (req,res)=>{
    const campground = await Campground.findById(req.params.id)

    res.render('./campgrounds/edit', {campground})
}))

router.put('/:id/',catchAsync(  async (req,res)=>{
    const { id }  = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground)
    res.redirect(`./campgrounds/${campground._id}`)

}))

router.delete('/:id',catchAsync( async (req,res)=>{
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('./campgrounds');
}))

module.exports = router;