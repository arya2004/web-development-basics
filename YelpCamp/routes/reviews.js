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
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review)
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}))

router.delete('/:reviewId', catchAsync(async(req,res)=>{
    const{ id, reviewId} = req.params
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router