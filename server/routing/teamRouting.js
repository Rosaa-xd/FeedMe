const express = require('express');
const Team = require('../models/Team');
<<<<<<< HEAD
const teamRepo = new TeamRepo();
=======
const repo = require('../repositories/teamRepository');
const teamRepo = new repo();
>>>>>>> 9835d708f4dfc5fd90f4605a836e281bf0026e3e

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        createTeam = team/create
        addTeamMember = team/addTeamMember give the team_id and the teamMember_id`;
    res.send(text);
});
<<<<<<< HEAD
router.post('/create', function(req,res) {
    teamRepo.createUser(data.id);
    res.send("Done");
});
=======

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

>>>>>>> 9835d708f4dfc5fd90f4605a836e281bf0026e3e
module.exports = router;