const express = require('express');
const User = require('../models/GoldCard');
const repo = require('../repositories/goldCardRepository');
const goldCardRepo = new repo();

let router = express.Router();

router.post('/create', function(req, res) {
    goldCardRepo.checkGoldCard(req.body.user_id)
        .then(function(goldCard) {
            if (goldCard.rowCount !== 0) {
                res.send("This person already had the goldcard in the last 7 days");
            }
            else {
                goldCardRepo.createGoldCard(req.body.user_id);
                res.send("The goldcard has been given.");
            }
        });
})

module.exports = router;