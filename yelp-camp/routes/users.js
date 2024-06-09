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
const User = require('../models/user');
const passport = require('passport');


router.get('/', (req,res)=>{
    res.render('./users/register.ejs')
})

router.post('/',catchAsync(async(req,res)=>{
    try{
    const {email, username, password} = req.body;
    const user = new User({email,username});
    const registeredUser = await User.register(user,password);
    res.redirect('/campgrounds')
    }catch(e){
        
        res.redirect('./register')
    }
    //console.log(registeredUser)
    
}));

router.get('/login', (req,res)=>{
    res.render('./users/login')
})

router.post('/login', passport.authenticate('local'), (req,res)=>{
    res.redirect('/campgrounds')
    
})

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', "Goodbye!");
      res.redirect('/campgrounds');
    });
  }); 

module.exports = router