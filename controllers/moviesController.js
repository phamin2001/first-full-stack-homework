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

// update route
router.put('/:id', (req, res) => {
   Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMOvie) => {
        if(err) {
            res.send(err);
        } else {
            console.log(updatedMOvie, 'This is updated');
            res.redirect('/movies');
        }
   });
});

router.get('/:id/edit', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err) {
            res.send(err);
        } else {
            res.render('edit.ejs', {
                movie: foundMovie
            });
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

// delete route
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
        if(err) {
            res.send(err);
        } else {
            console.log(deletedMovie, 'This is deleted.');
            res.redirect('/movies');
        }
    });
});




module.exports = router;

