const express = require('express');
const router = express.Router({mergeParams: true});
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError')
const Review = require('../models/review')




router.post('/', catchAsync(async(req,res)=>{
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review)
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}))

router.delete('/:reviewId', catchAsync(async(req,res)=>{
    if(!req.isAuthenticated()){
        req.flash('error', 'not logged in')
        return res.render('./users/login')
     }
    const{id,reviewId} = req.params;
    const review = await Review.findById(reviewID)

    if(!review.author.equals(req.user._id))
    {
        req.flash('error',"not allowed");
        return res.redirect(`/campgrounds/${id}`);
    }
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router