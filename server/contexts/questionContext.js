const Question = require('../models/Question');
const repo = require('../repositories/goalRepository');
const GoalRepo = new repo();
const Goal = require('../models/Goal');
const Model = require('objection').Model;

class questionContext {
    getQuestionById(id) {
        return Question.query()
            .where('id', id);
    }
    getQuestionByText(text) {
        let search = "%" + text.toLowerCase() + "%";
        return Question.query()
            .where(Question.raw('lower("question")'), 'LIKE', search);
    }
    getQuestionsByGoal(goal_id) {
        return Question.query()
            .where('goal_id', goal_id);
    }
    create(question, questionType, goal_id) {
        Question.query().insert({
            goal_id: goal_id,
            question: question,
            question_type: questionType
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = questionContext;