const Team = require('../models/Team');
const Model = require('objection').Model;

class teamContext {
    createTeam(leader){
        Team.query().insert({
            teamLead_id: leader
        })
        .catch (err => {
            console.log(err);
        });
    }
}

module.exports = teamContext;