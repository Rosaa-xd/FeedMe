const GoldCard = require('../models/GoldCard');
const Model = require('objection').Model;

class goldCardContext {
    getGoldCard(user_id) {
        return GoldCard.query()
            .where('user_id', user_id)
    }
    createGoldCard(user_id) {
        GoldCard.query().insert({
            user_id: user_id,
            created_at: new Date()
        })
        .catch(err => {
            console.log(err);
        })
    }
}