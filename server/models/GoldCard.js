const Model = require('objection').Model

class GoldCard extends Model {
    static get tableName() {
        return 'GoldCard'
    }
}

module.exports = GoldCard