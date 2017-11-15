const Feedback = require('../models/Feedback');
const cntxt = require('../contexts/feedbackContext');
const Model = require('objection').Model;
const context = new cntxt();


class feedbackRepo { 
    getFeedbackByRecievingUserId(id) {
        return context.getFeedbackByRecievingUserId(id);
    }
    getFeedbackBySenderUserId(id) {
        return context.getFeedbackBySenderUserId(id);
    }
    getFeedbackByRecievingUserId(id) {
        return context.getFeedbackByRecievingUserId(id);
    }
    createFeedbackToQuestion(sender,reciever,question,isAnon,top,tip,comment,date){
        context.createFeedbackToQuestion(sender,reciever,question,isAnon,top,tip,comment,date);
    }
    createFeedback(sender,reciever,isAnon,top,tip,comment,date){
        context.createFeedback(sender,reciever,isAnon,top,tip,comment,date)
    }
        
}
module.exports = feedbackRepo;