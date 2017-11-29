const Model = require('objection').Model;

class Feedback extends Model {
    static get tableName() {
        return 'Feedback';
    }

    static get relationMappings() {
        const User = require('./User');
        const Question = require('./Question');
        return {
            question: {
                relation: Model.BelongsToOneRelation,
                modelClass: Question,
                join: {
                    from: 'Feedback.question_id',
                    to: 'Question.id'
                }
            },

            sender: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'Feedback.sender_id',
                    to: 'User.id'
                }
            },
            
            receiver: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'Feedback.receiver_id',
                    to: 'User.id'
                }
            }
        };
    }
}

module.exports = Feedback;