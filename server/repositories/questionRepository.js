const Question = require('../models/Question');
const cntxt = require('../contexts/questionContext');
const Model = require('objection').Model;
const context = new cntxt();

class questionRepo {
    getQuestionById(id) {
        return context.getQuestionById(id);
    }
    getQuestionByText(text) {
        return context.getQuestionByText(text);
    }
    getQuestionsByGoal(goal_id) {
        return context.getQuestionsByGoal(goal_id);
    }
    create(question, questionType, goal_id) {
        return context.create(question, questionType, goal_id);
    }
}

module.exports = questionRepo;