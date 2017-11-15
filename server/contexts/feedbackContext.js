const Feedback = require('../models/Feedback');
const Model = require('objection').Model;

class feedbackContext { 
    getFeedbackByRecievingUserId(id){
        return Feedback.query()
        .where('reciever_id', id);
    }
    getFeedbackBySendingUserId(id){
        return Feedback.query()
        .where('sender_id', id);
    }
    createFeedbackToQuestion(sender,reciever,question,isAnon,top,tip,comment,date){
        Feedback.query().insert({
            sender_id: sender,
            reciever_id: reciever,
            question_id: question,
            anonymous: isAnon,
            top: top,
            tip: tip,
            comment: comment,
            date: date
        })
    }
    createFeedback(sender,reciever,isAnon,top,tip,comment,date){
        Feedback.query().insert({
            sender_id: sender,
            reciever_id: reciever,
            anonymous: isAnon,
            top: top,
            tip: tip,
            comment: comment,
            date: date
        })
    }
}
module.exports = feedbackContext;