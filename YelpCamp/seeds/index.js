
const mongoose = require('mongoose');
const Campground = require('../models/campground');
//const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connectef")
});

const seedDb = async() =>{
    await Campground.deleteMany({});
    const c = new Campground({
        title : "yui"
    });
    await c.save();
    console.log('saves')
}
seedDb();
