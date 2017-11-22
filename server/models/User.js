'use strict';

const Model = require('objection').Model;


class User extends Model {
    static get tableName() {
        return 'User';
    }
    
    static get relationMappings() {
        const Feedback = require('./Feedback');
        return {
            sendFeedback: {
                relation: Model.HasManyRelation,
                modelClass: Feedback,
                join: {
                    from: 'User.id',
                    to: 'Feedback.sender_id'
                }
            },

            receiveFeedback: {
                relation: Model.HasManyRelation,
                modelClass: Feedback,
                join: {
                    from: 'User.id',
                    to: 'Feedback.receiver_id'
                }
            }
        };
    }
}


module.exports = User;