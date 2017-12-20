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
    askForFeedback(sender, receiver, question) {
        Feedback.query().insert({
            sender_id: sender,
            receiver_id: receiver,
            question: question,
            anonymous: false,
            top: false,
            tip: false,
            created_at: new Date()
        })
        .catch (err => {
            console.log(err)
        });
    }
    getAskedFeedback(sender) {
        return Feedback.query()
            .where({
                sender_id: sender,
                top: false,
                tip: false
            })
            .orderBy('created_at');
    }
    fillInAskedFeedback(feedback_id, anonymous, top, tip, comment) {
        Feedback.query()
            .patch({
                anonymous: anonymous,
                top: top,
                tip: tip,
                comment: comment,
                updated_at: new Date()
            })
            .where({
                id: feedback_id
            })
        .catch (err => {
            console.log(err);
        })
    }
}
module.exports = feedbackContext;