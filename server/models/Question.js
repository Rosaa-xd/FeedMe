const Model = require('objection').Model;

class Question extends Model {
    static get tableName() {
        return 'Question';
    }

    static get relationMappings() {
        const Goal = require('./Goal');
        const Feedback = require('./Feedback');
        return {
            goal: {
                relation: Model.BelongsToOneRelation,
                modelClass: Goal,
                join: {
                    from: 'Question.goal_id',
                    to: 'Goal.id'
                }
            },

            feedbackOnQuestion: {
                relation: Model.HasManyRelation,
                modelClass: Feedback,
                join: {
                    from: 'Question.id',
                    to: 'Feedback.question_id'
                }
            }
        }
    }
}

module.exports = Question;