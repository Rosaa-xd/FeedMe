//import express from'express';
const User = require('../models/User');
const cntxt = require('../contexts/UserContext');
const Model = require('objection').Model;
const context = new cntxt();
//let router = express.Router();

class userRepo { 
    getUserById(id) {
        return context.getUserById(id);
    }
    getUserByEmail(email) {
        return context.getUserByEmail(email);
    }
    getUserByText(text) {
        return context.getUserByText(text);
    }
    createUser(firstname, lastname, password, email){
        return context.createUser(firstname, lastname, password, email);
    }
        
}

// router.get('/usertest', function(res,req){

// })

module.exports = userRepo;