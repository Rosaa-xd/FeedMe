const Team = require('../models/Team');
const cntxt = require('../contexts/teamContext');
const Model = require('objection').Model;
const context = new cntxt();

class teamRepo {
<<<<<<< HEAD
    createTeam(teamLead) {
        return context.createUser(teamLead);
    }
=======
    createTeam(teamLead) { return context.create(teamLead); }
    addTeamMember(team_id, teamMember) { return context.addTeamMember(team_id, teamMember); }
>>>>>>> 9835d708f4dfc5fd90f4605a836e281bf0026e3e
}

module.exports = teamRepo;