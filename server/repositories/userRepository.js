const User = require('../models/User');
const cntxt = require('../contexts/UserContext');
const Model = require('objection').Model;
const context = new cntxt();

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
    createUser(firstname, lastname, password, email, func){
        return context.createUser(firstname, lastname, password, email, func);
    }
        
}

module.exports = userRepo;