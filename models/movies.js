const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {type: String, require: true, unique: true},
    director: {type: String},
    genre: {type: String, require: true},
    date: Date
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;