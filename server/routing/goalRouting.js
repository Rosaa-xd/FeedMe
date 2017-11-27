const express = require('express');
const Goal = require('../models/Goal');

let router = express.Router();

router.get('/', function(req,res) {
    let text = `Hello User,
        this part of the API wil be filled in soon`;
    res.send(text);
});

module.exports = router;