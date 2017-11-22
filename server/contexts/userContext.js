const User = require('../models/User');
const Model = require('objection').Model;

class userContext {
    getUserByEmail(email){
        return User.query()
        .where('email', email);
    }
    getUserById(id){
        return User.query()
        .where('id', id);
    }
    createUser(firstname, lastname, password, email){
        User.query().insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email
        })
        .catch (err => {
            console.log(err);
        });
    }
    getUserByText(text){
        let search = "%" + text.toLowerCase() + "%";
        return User.query()
        .where(User.raw('lower("firstName")'),'LIKE', search)
        .orWhere(User.raw('lower("lastName")'), 'LIKE', search);
    }
}

module.exports = userContext;