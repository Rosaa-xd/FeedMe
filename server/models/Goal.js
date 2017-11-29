const Model = require('objection').Model;

class Goal extends Model {
    static get tableName() {
        return 'Goal';
    }

    static get relationMappings() {
        const User = require('./User');
        const Question = require('./Question');
        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'Goal.id',
                    through: {
                        from: 'User_Goal.goal_id',
                        to: 'User_Goal.user_id'
                    },
                    to: 'User.id'
                }
            },

            questions: {
                relation: Model.HasManyRelation,
                modelClass: Question,
                join: {
                    from: 'Goal.id',
                    to: 'Question.goal_id'
                }
            }
        }
    }
}

module.exports = Goal;