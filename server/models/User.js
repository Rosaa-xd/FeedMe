'use strict';

const Model = require('objection').Model;


class User extends Model {
    static get tableName() {
        return 'User';
    }
    
    static get relationMappings() {
        const Feedback = require('./Feedback');
        const Team = require('./Team');
        const Goal = require('./Goal');
        return {
            sendFeedback: {
                relation: Model.HasManyRelation,
                modelClass: Feedback,
                join: {
                    from: 'User.id',
                    to: 'Feedback.sender_id'
                }
            },

            receivedFeedback: {
                relation: Model.HasManyRelation,
                modelClass: Feedback,
                join: {
                    from: 'User.id',
                    to: 'Feedback.receiver_id'
                }
            },

            leadingTeams: {
                relation: Model.HasManyRelation,
                modelClass: Team,
                join: {
                    from: 'User.id',
                    to: 'Team.teamLead_id'
                }
            },

            memberOfTeams: {
                relation: Model.ManyToManyRelation,
                modelClass: Team,
                join: {
                    from: 'User.id',
                    through: {
                        from: 'UserTeam.user_id',
                        to: 'UserTeam.team_id'
                    },
                    to: 'Team.id'
                }
            },
            
            goals: {
                relation: Model.ManyToManyRelation,
                modelClass: Goal,
                join: {
                    from: 'User.id',
                    through: {
                        from: 'User_Goal.user_id',
                        to: 'User_Goal.goal_id'
                    },
                    to: 'Goal.id'
                }
            },

            goldCards: {
                relation: Model.HasManyRelation,
                modelClass: GoldCard,
                join: {
                    from: 'User.id',
                    to: 'GoldCard.User_id'
                }
            }
        };
    }
}

module.exports = User;