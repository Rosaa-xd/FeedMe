const express = require('express');
const Question = require('../models/Question');
const repo = require('../repositories/questionRepository');
const questionRepo = new repo();

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        getById = question/byId/id
        filterOnQuestion = question/filter/any letter you want to search on
        getByGoal = question/byGoal/goal_id
        create = question/create`;
    res.send(text);
});

router.get('/byId/:identifier', function(req,res) {
    questionRepo.getQuestionById(req.params.identifier)
        .then(question => {
            res.send(question);
        });
});

router.get('/filter/:identifier', function(req,res) {
    questionRepo.getQuestionByText(req.params.identifier)
        .then(question => {
            res.send(question);
        });
});

router.get('/byGoal/:identifier', function(req,res) {
    questionRepo.getQuestionsByGoal(req.params.identifier)
        .then(questions => {
            res.send(questions);
        });
});

router.post('/create', function(req,res) {
    let data = req.body;
    questionRepo.create(data.question, data.questionType, data.goal_id);
    res.send("Done");
})

module.exports = router;