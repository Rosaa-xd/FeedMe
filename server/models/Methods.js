const User = require('./User');
const Model = require('objection').Model;

class Method {
    static getUser(firstname, lastname){
        console.log(firstname + lastname);
        return User.query()
        .where('firstName', 'Roos');
    }
}
module.exports = Method;