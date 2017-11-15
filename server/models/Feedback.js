const Model = require('objection').Model;

class Feedback extends Model {
    static get tableName() {
        return 'Feedback';
    }
    
}


module.exports = Feedback;