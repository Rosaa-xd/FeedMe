const Team = require('../models/Team');
const Model = require('objection').Model;

class teamContext {
    getTeamById(team_id) {
        return Team.query()
            .where('id', team_id)
            .eager('[teamMembers, teamLead]');
    }
}

module.exports = teamContext;