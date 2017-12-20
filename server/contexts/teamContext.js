const Team = require('../models/Team');
const Model = require('objection').Model;
const knexConfig = require('../../knexfile');
const Knex = require('knex');
const knex = Knex(knexConfig.development);
Model.knex(knex);

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
    addTeamMember(team_id, teamMember) {
        knex('UserTeam').insert({
            team_id: team_id,
            user_id: teamMember
        })
        .catch(err => {
            console.log(err);
        });
    }
    deleteTeamMember(team_id, teamMember) {
        knex('UserTeam')
            .del()
            .where({
                team_id: team_id,
                user_id: teamMember
            })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = teamContext;