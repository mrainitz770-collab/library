const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    category: String,
    available: Boolean
})
const bookModel = mongoose.model('book', bookSchema);
module.exports = bookModel;