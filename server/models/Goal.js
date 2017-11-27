const Model = require('objection').Model;

class Goal extends Model {
    static get tableName() {
        return 'Goal';
    }
}

module.exports = Goal;