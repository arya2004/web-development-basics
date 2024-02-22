const mongoose = require('mongoose');
const {Schema } = mongoose;
const weatherSchema = new Schema({
    Date:{
        type: Date,
        required: true
    },
    temperatureC:{
        type: Number,
        required: true,
        min: 0
    },
    temperatureF:{
        type: Number,
        required: true,
        default: 32 + (TemperatureC / 0.5556)
    },
    Summary:{
        type: String,
        required: false
    }
    

})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;