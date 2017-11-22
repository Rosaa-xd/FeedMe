const express = require('express');
const Feedback = require('../models/Feedback');
const repo = require('../repositories/feedbackRepository');
const feedbackRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text=`Hello User,  
    createFeedback= feedback/create `
    res.send(text);
});

router.post('/create', function(req,res) {
    let data = req.body;
    feedbackRepo.createFeedback(data.sender, data.receiver, data.top, data.tip, data.comment);
    res.send("Done");
});

module.exports = router;