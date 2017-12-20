const Goal = require('../models/Goal');
const cntxt = require('../contexts/goalContext');
const Model = require('objection').Model;
const context = new cntxt();

class goalRepo {
    getGoalById(id) {
        return context.getGoalById(id);
    }
    getGoalByName(name) {
        return context.getGoalByName(name);
    }
    getGoalByText(text) {
        return context.getGoalByText(text);
    }
    create(goalName, user_id) {
        return context.create(goalName, user_id);
    }
}

module.exports = goalRepo;