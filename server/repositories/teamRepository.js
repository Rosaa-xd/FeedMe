const Team = require('../models/Team');
const cntxt = require('../contexts/teamContext');
const Model = require('objection').Model;
const context = new cntxt();

class teamRepo {
    getById(team_id) {return context.getTeamById(team_id);}
    createTeam(teamLead) { return context.create(teamLead); }
    addTeamMember(team_id, teamMember) { return context.addTeamMember(team_id, teamMember); }
    deleteTeamMember(team_id, teamMember) {return context.deleteTeamMember(team_id, teamMember); }
}

module.exports = teamRepo;