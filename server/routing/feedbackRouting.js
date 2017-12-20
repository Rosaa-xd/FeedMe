const express = require('express');
const Feedback = require('../models/Feedback');
const repo = require('../repositories/feedbackRepository');
const feedbackRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text=`Hello User,  
    createFeedback= feedback/create 
    askFeedback = feedback/ask pass sender and receiver id`
    res.send(text);
});

router.post('/create', function(req,res) {
    let data = req.body;
    feedbackRepo.createFeedback(data.sender, data.receiver, data.top, data.tip, data.comment);
    res.send("Done");
});

router.post('/ask', function(req, res) {
    let data = req.body;
    feedbackRepo.askForFeedback(data.sender, data.receiver);
    res.send("Feedback asked");
})

router.get('/askedFeedback/:identifier', function(req, res) {
    feedbackRepo.getAskedFeedback(req.params.identifier)
        .then(feedback => {
            res.send(feedback);
        })
})

router.post('/fillInFeedback', function(req,res) {
    let data = req.body;
    feedbackRepo.fillInAskedFeedback(data.id, data.anonymous, data.top, data.tip, data.comment);
    res.send("Feedback filled in");
})

module.exports = router;