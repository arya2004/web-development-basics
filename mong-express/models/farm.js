const mongoose = require('mongoose');
const {Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must']
    },
    city:{
        type: String
    },
    email:{
        type: String,
        required: [true, 'Name must']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;