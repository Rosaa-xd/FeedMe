const express = require('express');
const User = require('../models/User');
const repo = require('../repositories/userRepository');
const userRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text=`Hello User,  
    getByEmail= user/byEmail/email
    getById= user/byId/id 
    filterOnName= user/filter/any letter you want to search on 
    createUser= user/create`
    res.send(text);
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
    userRepo.createUser(data.firstName, data.lastName, data.password, data.email, data.function);
    res.send("Done");
});

module.exports = router;