const Team = require('../models/Team');
const Model = require('objection').Model;

class teamContext {
    getTeamById(team_id) {
        return Team.query()
            .where('id', team_id)
            .eager('[teamMembers, teamLead]');
    }
    create(teamLead) {
        Team.query().insert({
            teamLead_id: teamLead
        })
        .catch (err => {
            console.log(err);
        })
    }
    // addTeamMember(team_id, teamMember) {
    //     Team.insert({

    //     })
    // }
}

module.exports = teamContext;