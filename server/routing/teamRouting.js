const express = require('express');
const Team = require('../models/Team');
const teamRepo = new TeamRepo();

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        this part of the API will be filled in soon`;
    res.send(text);
});
router.post('/create', function(req,res) {
    teamRepo.createUser(data.id);
    res.send("Done");
});
module.exports = router;