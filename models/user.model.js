const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name:String,
    Age:Number
});

module.exports = mongoose.model('User', UserSchema);