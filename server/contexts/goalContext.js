const Goal = require('../models/Goal');
const Model = require('objection').Model;

class goalContext {
    getGoalById(id) {
        return Goal.query()
            .where('id', id);
    }
    getGoalByName(name) {
        return Goal.query()
            .where(Goal.raw('lower("goalName")'), name.toLowerCase());
    }
    getGoalByText(text) {
        let search = "%" + text.toLowerCase() + "%";
        return Goal.query()
            .where(Goal.raw('lower("goalName")'), 'LIKE', search);
    }
    create(goalName) {
        Goal.query().insert({
            goalName: goalName
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = goalContext;