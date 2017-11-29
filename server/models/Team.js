const Model = require('objection').Model;

class Team extends Model {
    static get tableName() {
        return 'Team';
    }

    static get relationMappings() {
        const User = require('./User');
        return {
            teamLead: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'Team.teamLead_id',
                    to: 'User.id'
                }
            },

            teamMembers: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'Team.id',
                    through: {
                        from: 'UserTeam.team_id',
                        to: 'UserTeam.user_id'
                    },
                    to: 'User.id'
                }
            }
        }
    }
}

module.exports = Team;