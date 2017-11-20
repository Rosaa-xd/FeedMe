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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/user', function(req, res) {
    User.query().insert({
        firstName: 'John',
        lastName: 'Johnson',
        password: 'password',
        email: 'supermail@live.nl'
    })
    .then(roos => {
        console.log(roos instanceof User);
        console.log(roos.firstName);
        console.log(roos.lastName);
    })
    .catch(err => {
        console.log(err);
    });

    User.query()
        .then(users => {
            console.log(users[0] instanceof User);
            console.log('There are ', users.length, ' users in total');
        })
        .catch(err => {
            console.log(err);
        });
});

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