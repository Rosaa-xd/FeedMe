const express = require('express');
const app = express();
const port = 8192;
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('../knexfile');
const User = require('./models/User');

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.get('/', function(req, res) {
    User.query()
        .insert({userName: 'Roos'});
    res.send(User.query().where('userName', 'Roos'))
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`)
});