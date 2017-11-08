const express = require('express');
const app = express();
const port = 8192;
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const User = require('./models/User');
const Method = require('./models/Methods');
const knex = Knex(knexConfig.development);
Model.knex(knex);



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
    var m = new Method();
    var u = m.getUser('Roos','Heijkoop')
    res.send(`Hello ${u.firstName} ${u.lastName}`)
    
   
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});