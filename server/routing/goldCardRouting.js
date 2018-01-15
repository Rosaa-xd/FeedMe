const express = require('express');
const User = require('../models/GoldCard');
const repo = require('../repositories/goldCardRepository');
const repoUser = require('../repositories/userRepository');
const goldCardRepo = new repo();
const userRepo = new repoUser();

let router = express.Router();

router.post('/create', function(req, res) {
    goldCardRepo.checkGoldCard(req.body.receiver_id)
        .then(function(goldCard) {
            if (goldCard.rowCount !== 0) {
                res.send("This person already had the goldcard in the last 7 days");
            }
            else {
                goldCardRepo.createGoldCard(req.body.receiver_id);
                userRepo.giveGoldCard(req.body.receiver_id);
                userRepo.getUserById(req.body.sender_id)
                    .then(user => {
                        res.send(user);
                    });
            }
        });
})

module.exports = router;