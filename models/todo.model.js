const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    Task:String,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Todo',TodoSchema);