const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/moviedb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${connectionString}`);
});

mongoose.connection.on('err', () => {
    console.log(`Mongoose connect error ${err}`);
});

mongoose.connection.on('disconnect', () => {
    console.log(`Mongoose disconnected from ${connectionString}`);
});