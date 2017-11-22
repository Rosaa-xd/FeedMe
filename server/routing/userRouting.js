const express = require('express');
const User = require('../models/User');
const repo = require('../repositories/userRepository');
const userRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    if (req.param('id') != null) {
        userRepo.getUserById(req.param('id'))
        .then(user => {
            res.send(user);
        });
    }
    else if (req.param('email') != null) {
        userRepo.getUserByEmail(req.param('email'))
            .then(user => {
                res.send(user);
            });
    }
    
});

module.exports = router;