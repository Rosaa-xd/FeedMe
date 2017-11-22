const express = require('express');
const app = express();
const port = 8192;
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const User = require('./models/User');
const userRepo = require('./repositories/userRepository');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knex = Knex(knexConfig.development);
Model.knex(knex);
const repo = new userRepo();
const userRouting = require('./routing/userRouting');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/user', userRouting);

app.get('/', function(req, res) {
        res.send('Hello World');
});

app.get('/timo', function(req, res) {
    repo.getUserByEmail('timo.hermans@mediaan.com')
        .then(timo => {
            res.send(timo[0].length);
        })
});

app.post('/timo', function(req,res) {
    let data = req.body;
    repo.createUser(data.firstName, data.lastName, data.password, data.email);
    res.send("Gelukt!");
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});