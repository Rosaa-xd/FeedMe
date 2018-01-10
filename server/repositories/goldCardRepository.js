const GoldCard = require('../models/GoldCard');
const cntxt = require('../contexts/goldCardContext');
const Model = require('objection').Model;
const context = new cntxt();

class goldCardRepo {
    createGoldCard(user_id) {
        return context.createGoldCard(user_id);
    }
    checkGoldCard(user_id) {
        return context.checkGoldCard(user_id);
    }
}

module.exports = goldCardRepo;