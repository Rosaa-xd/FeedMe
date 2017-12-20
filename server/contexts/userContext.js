const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email) {
        let search = "%" + email.toLowerCase() + "%";
        return User.query()
            .where(User.raw('lower("email")'), 'LIKE', search)
            .eager('[sendFeedback,receivedFeedback, leadingTeams, memberOfTeams, goals]');
    }
    getUserById(id) {
        return User.query()
            .where('id', id)
            .eager('[sendFeedback,receivedFeedback, leadingTeams, memberOfTeams, goals]');
    }
    getNameById(id) {
        return User.query()
            .select('User.firstName', 'User.lastName')
            .where('id', id)
    }
    createUser(firstname, lastname, password, email, func) {
        User.query().insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            function: func
        })
            .catch(err => {
                console.log(err);
            });
    }
    getUserByText(text) {
        let search = "%" + text.toLowerCase() + "%";
        return User.query()
            .where(User.raw('lower("firstName")'), 'LIKE', search)
            .orWhere(User.raw('lower("lastName")'), 'LIKE', search)
            .eager('[sendFeedback,receivedFeedback, leadingTeams, memberOfTeams, goals]');
    }
    login(email, password) {
        return User.query()
            .where('email', email)
            .eager('[sendFeedback, receivedFeedback, leadingTeams, memberOfTeams, goals]');
    }
    getAllUsers() {
        return User.query()
    }
    giveGoldCard(user_id) {
        User.query().patch({
            goldCard: false
        })
            .where('id', '!=', user_id)
            .catch(err => {
                console.log(err);
            })
        User.query().patch({
            goldCard: true
        })
            .where({
                id: user_id
            })
            .catch(err => {
                console.log(err);
            });

    }

    givePoints(points, id) {
        getUserById(id)
            .then(user => {
                user instanceof User;
                if (user.goldCard) {
                    User.query().patch({
                        score: user.score + (points * 2)
                    })
                        .catch(err => {
                            console.log(err);
                        });
                }
                else (
                    User.query().patch({
                        score: user.score + points
                    })
                        .catch(err => {
                            console.log(err);
                        })
                )
            })
    }
}

module.exports = userContext;