const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/animalShelter')
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("nopeee")
        console.log(err)
    })
//create schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating:  String
})

const Movie = mongoose.model('Movie', movieSchema);
//create instance of movie class
const Garfield = new Movie({  
    title: 'Garfield',
    year: 1984,
    score: 9.9,
    rating:  'R'})
Garfield.save();

// Movie.insertMany([
//     {title: 'Garfield',year: 1984,score: 9.9,rating:  'R'},
//     {title: 'Garfield-1',year: 2000,score: 4.5,rating:  'R'},
//     {title: 'Garfield-2',year: 2004,score: 7.8,rating:  'PG'},
//     {title: 'Garfield-3',year: 2023,score: 9.6,rating:  'R'},
//     {title: 'Garfield-4',year: 2015,score: 9.2,rating:  'R'},
//     {title: 'Garfield-5',year: 2019,score: 8.9,rating:  'PG-13'},
// ]).then(data =>{
//     console.log("it worked");
//     //console.log(data)
// })
//single instance needs save. insertMany doesnt need same
//console.log(Movie.find({}))
//Movie.find({rating: 'PG-13'}).then(data => console.log(data))
//Movie.find({year: {$gte :2019 }}).then(data => console.log(data))
//Movie.findOne({year: {$gte :2023 }}).then(data => console.log(data))
//Movie.findById('640f42a43d9d08a3a9a6ce65').then(data => console.log(data))
//Movie.findByIdAndUpdate('640f42a43d9d08a3a9a6ce65',{score: -1}).then(data => console.log(data))
//Movie.findByIdAndUpdate('640f42a43d9d08a3a9a6ce65',{score: -1},{new;true}) returns modified document
//Movie.updateMany({title: "Garfield"}, {score: 10.0}).then(data => console.log(data))

//=======================================================================================================
//built in validations
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    onSale:{
        type: Boolean,
        default: false
    },
    category: [String] 
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({
    name: "apartment",
    category: ["1bhk", "3bhk"],
     onSale: true
})
bike.save().then(data => console.log(data))