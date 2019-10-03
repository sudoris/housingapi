const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoConfig = require('./config/mongo.js');

// set up express app
const app = express();

// set port
const port = process.env.port || 4000;

// connect to mongodb

mongoose.connect('mongodb://localhost/housingdb', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connected to Mongodb');
}).on('error', (err) => {
    console.log('Failed to connect to Mongodb', err);
});

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/properties', require('./routes/properties'));

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(port, () => {
    console.log('Listening on port', port);
});
