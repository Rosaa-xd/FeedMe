const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email){
        return User.query()
        .where('email', email);
    }
    getUserById(id){
        return User.query()
        .where('Id', id);
    }
    createUser(firstname, lastname, password, email){
        User.query()
        .insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email
        });
    }
    getUserByText(text){
        return User.query()
        .where('firstName','LIKE', '*'+text+'*');
    }
}
module.exports = userContext;