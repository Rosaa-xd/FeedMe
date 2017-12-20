// Server setup
const express = require('express');
const app = express();
const port = 8192;

// Dev Libraries
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const knex = Knex(knexConfig.development);
Model.knex(knex);

// Routing
const userRouting = require('./routing/userRouting');
const feedbackRouting = require('./routing/feedbackRouting');
const goalRouting = require('./routing/goalRouting');
const teamRouting = require('./routing/teamRouting');
const questionRouting = require('./routing/questionRouting');

// Using Dev Libs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

// Attaching Routing
app.use('/user', userRouting);
app.use('/feedback',feedbackRouting);
app.use('/goal', goalRouting);
app.use('/team', teamRouting);
app.use('/question', questionRouting);


app.get('/', function(req, res) {
        res.send('Hello World');
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});

var allUsers;
