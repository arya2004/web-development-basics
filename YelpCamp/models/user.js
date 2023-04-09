const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = require('passport-local-mongoose')

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }
})
UserSchema.plugin(plm);

modulel.exports = mongoose.model('User', UserSchema)