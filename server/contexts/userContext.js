const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email){
        User.query()
        .where('email', email)
        .then(user => {
            console.log("userContext console log:");
            console.log(user instanceof User);
            console.log(user.firstName);
            console.log(user.lastName);
        })
        .catch(err => {
            console.log(err);
        });
    }
    getUserById(id){
        return User.query()
        .where('Id', id);
    }
    createUser(firstname, lastname, password, email){
        return User.query().insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email
        }).catch(err => {
            console.log(err);
        })
    }
    getUserByText(text){
        return User.query()
        .where('firstName','LIKE', '*'+text+'*');
    }
}

module.exports = userContext;