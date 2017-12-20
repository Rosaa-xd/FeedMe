const Goal = require('../models/Goal');
const User = require('../models/User');
const repo = require('../contexts/userContext');
const UserRepo = new repo();
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
    create(goalName, user_id) {
        var user;
        UserRepo.getUserById(user_id)
            .then(userFromDb => {
                userFromDb[0] instanceof User
                user = userFromDb[0]
                user.$relatedQuery('goals')
                .insert({
                    goalName: goalName
                })
                .catch(err => {
                    console.log(err);
                });
            })
    }
    delete(id) {
        Goal.query()
            .del()
            .where({id:id})
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = goalContext;