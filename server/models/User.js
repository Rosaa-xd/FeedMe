const Model = require('objection').Model;

class User extends Model {
    static get tableName() {
        return 'User';
    }
    
}


module.exports = User;