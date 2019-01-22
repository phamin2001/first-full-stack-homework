const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

// const MoviesData = require('../famousMovies');
// Movie.collection.insertMany(MoviesData, (err, data) => {
//     console.log('Added provided movies data');
//     mongoose.connection.close();
// });

//index route
router.get('/', (req,res) => {
    Movie.find((err, foundMovies) => {
        if(err) {
            res.send(err);
        } else {
            res.render('index.ejs', {
                arrayOfMovies: foundMovies
            })
        }
    });
});

// new route
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// create route
router.post('/', (req, res) => {
    Movie.create(req.body, (err, createdMovie) => {
        if(err) {
            res.send(err);
        } else {
            console.log(createdMovie);
            res.redirect('/movies');
        }
    });
});



// show route
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err) {
            res.send(err);
        } else {
            res.render('show.ejs', {
                movie: foundMovie
            });            
        }
    });
});






module.exports = router;

