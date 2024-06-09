const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pulse = require('./pulse')



const PatientSchema = new Schema({
    name: String,
    pulse:[{
        type: Schema.Types.ObjectId,
        ref: 'Pulse',
        expireAt: {
            type: Date,
            default: new Date().getTime() + (10 * 1000) 
          },
    }],

})




module.exports = mongoose.model('Patient', PatientSchema)