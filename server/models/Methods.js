const User = require('./User');
const Model = require('objection').Model;

class Method {
    getUser(firstname, lastname){
        console.log(firstname + lastname);
        User.query()
        .where('firstName', 'Roos')
        .then(user=>{
            user[0] instanceof User;
            var u = user[0];
            return u;
        })
    }
}
module.exports = Method;