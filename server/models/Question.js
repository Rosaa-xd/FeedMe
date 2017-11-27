const Model = require('objection').Model;

class Question extends Model {
    static get tableName() {
        return 'Question';
    }
}

module.exports = Question;