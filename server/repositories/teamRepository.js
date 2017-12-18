const Team = require('../models/Team');
const cntxt = require('../contexts/teamContext');
const Model = require('objection').Model;
const context = new cntxt();

class teamRepo {
    createTeam(teamLead) {
        return context.createUser(teamLead);
    }
}

module.exports = teamRepo;