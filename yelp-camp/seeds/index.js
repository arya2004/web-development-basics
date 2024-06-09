
const mongoose = require('mongoose');
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');
//const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connectef")
});

const sample = array => array[Math.floor(Math.random()* array.length)];


const seedDb = async() =>{
    await Campground.deleteMany({});

 
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '643451aef48492a8f1514ff9',
            location: `${cities[random1000].city} , ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251/1600x900',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate placeat architecto excepturi quia. Repellat voluptates, nesciunt temporibus reprehenderit id eveniet hic placeat distinctio et aut consequatur quidem, repellendus pariatur.',
            price

        })
        await camp.save();
        
    }
    
    console.log('saves')
}
//  seedDb().then(() => {
//      mongoose.connection.close()
//  });
// seedDb();