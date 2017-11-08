const express = require('express');
const port = 8192;
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const User = require('./models/User');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Method = require('./models/Methods');

const app = express()
    .use(bodyParser.json())
    .use(morgan('dev'));

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.post('/timo', function(req,res) {
    User.query().insert({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
});

app.get('/timo', function(req, res) {
    User.query()
        .where('firstName', 'Timo')
        .then(timo => {
            timo[0] instanceof User;
            res.send(`Timo has been inserted ${timo.length} times.`);
        })
})

app.get('/user', function(req, res) {
    User.query().insert({
        firstName: 'Roos',
        lastName: 'Heijkoop',
        password: 'password',
        email: 'email'
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
    User.query()
        .where('firstName', 'Teun')
        .then(roos => {
            roos[0] instanceof User;
            res.send(`Hey there, ${roos[0].firstName}! Your last name is ${roos[0].lastName}!`);
        });
});

app.get('/teun', async function(req, res) {
    var u = Method.getUser('Roos', 'Heijkoop')
        .then(user => {
            user[0] instanceof User
            var u = user[0]
            res.send(u);
        })
    // res.send(`Hello ${u[0].firstName} ${u[0].lastName}`)
})

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});