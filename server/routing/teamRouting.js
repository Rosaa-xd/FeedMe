const express = require('express');
const Team = require('../models/Team');
const repo = require('../repositories/teamRepository');
const teamRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        createTeam = team/create
        addTeamMember = team/addTeamMember give the team_id and the teamMember_id
        deleteTeamMember = team/deleteTeamMember`;
    res.send(text);
});

router.post('/create', function(req,res) {
    let data = req.body;
    teamRepo.createTeam(data.teamLead);
    res.send('Done');
})

router.post('/addTeamMember', function(req,res) {
    let data = req.body;
    teamRepo.addTeamMember(data.team_id, data.teamMember_id);
    res.send('Done');
})

router.post('/deleteTeamMember', function(req,res) {
    let data = req.body;
    teamRepo.deleteTeamMember(data.team_id, data.teamMember_id);
    res.send('Done');
})

module.exports = router;