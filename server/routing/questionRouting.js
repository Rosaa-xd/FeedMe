const express = require('express');
const Question = require('../models/Question');

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        this part of the API will be filled in soon`;
    res.send(text);
})

module.exports = router;