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
    createFeedback(sender,receiver,top,tip,comment){
        context.createFeedback(sender,receiver,top,tip,comment);
    }
    askForFeedback(sender, receiver, question) {
        context.askForFeedback(sender,receiver, question);
    } 
    getAskedFeedback(sender) {
        return context.getAskedFeedback(sender);
    }
    fillInAskedFeedback(feedback_id, anonymous, top, tip, comment) {
        context.fillInAskedFeedback(feedback_id, anonymous, top, tip, comment);
    }
}
module.exports = feedbackRepo;