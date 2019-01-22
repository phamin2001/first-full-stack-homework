require('./dbs/db');

const express = require('express');
const app = express();

const moviesController = require('./controllers/moviesController');


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/movies', moviesController);

app.listen(3000, () => {
    console.log('Server is running!!!');
});







