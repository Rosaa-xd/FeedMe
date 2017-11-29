const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email){
        return User.query()
        .where('email', email)
        .eager('[sendFeedback,receiveFeedback]');
    }
    getUserById(id){
        return User.query()
        .where('id', id)
        .eager('[sendFeedback,receiveFeedback]');
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
        .eager('[sendFeedback,receiveFeedback]');
    }
    login(email,password){
        return User.query().where('email',email);
    }
}

module.exports = userContext;