const express = require('express');
const Team = require('../models/Team');
const repo = require('../repositories/teamRepository');
const teamRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        createTeam = team/create`;
    res.send(text);
});

router.post('/create', function(req,res) {
    let data = req.body;
    teamRepo.createTeam(data.teamLead);
    res.send('Done');
})

module.exports = router;