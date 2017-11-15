const express = require('express');
const app = express();
const port = 8192;
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const User = require('./models/User');
const userRepo = require('./repositories/userRepository');
const knex = Knex(knexConfig.development);
Model.knex(knex);
const repo = new userRepo();


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
   
   
        repo.createUser('Timo','Hermans','password', 'timo2@live.nl')
        .then(
            repo.getUserByEmail('timo2@live.nl').then(user=>{
                res.send(user[0].firstName);
            }) 
        )
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});