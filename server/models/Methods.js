const User = require('./User');
const Model = require('objection').Model;

class Method {
    getUserByEmail(email){
        return User.query()
        .where('email', email);
    }
    getUserById(id){
        return User.query()
        .where('Id', id);
    }
    createUser(firstname, lastname, password, email){
        User.query().insert({
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email
        })
    }
}
module.exports = Method;