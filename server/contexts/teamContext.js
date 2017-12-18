const Team = require('../models/Team');
const Model = require('objection').Model;
const knexConfig = require('../../knexfile');
const Knex = require('knex');
const knex = Knex(knexConfig.development);
Model.knex(knex);

class teamContext {
<<<<<<< HEAD
    createTeam(leader){
        Team.query().insert({
            teamLead_id: leader
        })
        .catch (err => {
            console.log(err);
        });
=======
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
    addTeamMember(team_id, teamMember) {
        knex('UserTeam').insert({
            team_id: team_id,
            user_id: teamMember
        })
        .catch(err => {
            console.log(err);
        })
>>>>>>> 9835d708f4dfc5fd90f4605a836e281bf0026e3e
    }
}

module.exports = teamContext;