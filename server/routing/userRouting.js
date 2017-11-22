const express = require('express');
const User = require('../models/User');
const repo = require('../repositories/userRepository');
const userRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    res.send("Hello User");
});

router.get('/byEmail/:identifier', function(req,res) {
    userRepo.getUserByEmail(req.params.identifier)
        .then(user => {
            res.send(user);
        });
});

router.get('/byId/:identifier', function(req,res) {
    userRepo.getUserById(req.params.identifier)
    .then(user => {
        res.send(user);
    });
});

router.get('/filter/:identifier', function(req,res) {
    userRepo.getUserByText(req.params.identifier)
    .then(user => {
        res.send(user);
    });
});

router.post('/create', function(req,res) {
    let data = req.body;
    userRepo.createUser(data.firstName, data.lastName, data.password, data.email);
    res.send("Done");
});

module.exports = router;