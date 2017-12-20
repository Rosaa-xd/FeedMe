const express = require('express');
const Goal = require('../models/Goal');
const repo = require('../repositories/goalRepository');
const goalRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        getById = goal/byId/id
        getByName = goal/byName/name
        filterOnName = goal/filter/any letter you want to search on
        create = goal/create`;
    res.send(text);
});

router.get('/byId/:identifier', function(req,res) {
    goalRepo.getGoalById(req.params.identifier)
        .then(goal => {
            res.send(goal);
        });
});

router.get('/byName/:identifier', function(req,res) {
    goalRepo.getGoalByName(req.params.identifier)
        .then(goal => {
            res.send(goal);
        })
})

router.get('/filter/:identifier', function(req,res) {
    goalRepo.getGoalByText(req.params.identifier)
        .then(goal => {
            res.send(goal);
        })
})

router.post('/create', function(req,res) {
    let data = req.body;
    goalRepo.create(data.goalName, data.user_id);
    res.send("Done");
})

module.exports = router;