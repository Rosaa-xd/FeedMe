const GoldCard = require('../models/GoldCard');
const Model = require('objection').Model;
const multiline = require('multiline');
const knexConfig = require('../../knexfile');
const Knex = require('knex');
const knex = Knex(knexConfig.development);
Model.knex(knex);

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
    checkGoldCard(user_id) {
        var currDate = new Date();
        var weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        var query = multiline.stripIndent(function() {/*
            select * from "GoldCard" as g, "User" as u
                where g.user_id = u.id
                and u.id = ?
                and created_at between ? and ?
        */});
        query = query.replace(/\n/g, '').replace(/\t/g, '');
        return knex.raw(query, [user_id, weekAgo, currDate]);
    }
}

module.exports = goldCardContext;