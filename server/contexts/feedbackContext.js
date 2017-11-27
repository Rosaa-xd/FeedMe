const Feedback = require('../models/Feedback');
const Model = require('objection').Model;

class feedbackContext { 
    getFeedbackByRecievingUserId(id){
        return Feedback.query()
        .where('receiver_id', id);
    }
    getFeedbackBySendingUserId(id){
        return Feedback.query()
        .where('sender_id', id);
    }
    createFeedback(sender,receiver, top,tip,comment){
        Feedback.query().insert({
            sender_id: sender,
            receiver_id: receiver,
            anonymous: false,
            top: top,
            tip: tip,
            comment: comment,
            created_at: new Date()
        })
        .catch (err => {
            console.log(err);
        });
    }
}
module.exports = feedbackContext;