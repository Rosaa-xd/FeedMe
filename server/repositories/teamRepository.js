const Team = require('../models/Team');
const cntxt = require('../contexts/teamContext');
const Model = require('objection').Model;
const context = new cntxt();

class teamRepo {
    createTeam(teamLead) { return context.create(teamLead); }
    addTeamMember(team_id, teamMember) { return context.addTeamMember(team_id, teamMember); }
}

module.exports = teamRepo;