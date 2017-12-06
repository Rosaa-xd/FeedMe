const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email){
        return User.query()
        .where('email', email)
        .eager('[sendFeedback,receivedFeedback]');
    }
    getUserById(id){
        return User.query()
        .where('id', id)
        .eager('[sendFeedback,receivedFeedback]');
    }
    getNameById(id){
        return User.query()
        .select('User.firstName', 'User.lastName')
        .where('id', id)
    }
    createUser(firstname, lastname, password, email, func){
        User.query().insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            function: func
        })
        .catch (err => {
            console.log(err);
        });
    }
    getUserByText(text){
        let search = "%" + text.toLowerCase() + "%";
        return User.query()
        .where(User.raw('lower("firstName")'),'LIKE', search)
        .orWhere(User.raw('lower("lastName")'), 'LIKE', search)
        .eager('[sendFeedback,receivedFeedback]');
    }
    login(email,password){
        return User.query().where('email',email);
    }
}

module.exports = userContext;