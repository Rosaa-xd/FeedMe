const express = require('express');
const User = require('../models/User');
const repo = require('../repositories/userRepository');
const createHash = require('crypto').createHash;
const userRepo = new repo();

let router = express.Router();
var allUsers = null;

router.get('/', function(req,res) {
    let text=`Hello User,  
    getByEmail= user/byEmail/email
    getById= user/byId/id 
    getNameOfUserById = user/nameById/id
    filterOnName= user/filter/any letter you want to search on 
    createUser= user/create
    randomUser = user/getRandom
    giveGoldCard = user/giveGoldCardTo/id`
    res.send(text);
});

router.get('/byEmail/:identifier', function(req,res) {
    userRepo.getUserByEmail(req.params.identifier)
        .then(user => {
            res.send(user);
        });
});

router.get('/byId/:identifier', function(req,res) {
    userRepo.getUserById(req.params.identifier)
    .then(user => {
        res.send(user);
    });
});

router.get('/filter/:identifier', function(req,res) {
    userRepo.getUserByText(req.params.identifier)
    .then(user => {
        res.send(user);
    });
});

router.get('/giveGoldCardTo/:identifier',function(req,res){
    userRepo.giveGoldCard(req.params.identifier);
    res.send(req.params.identifier + ' now has the goldcard');
})
// get name of user by id
router.get('/nameById/:identifier', function(req,res) {
    userRepo.getNameById(req.params.identifier)
    .then(user => {
        res.send(user);
    });
});
router.post('/create', function(req,res) {
    let data = req.body;
    let hash = createHash('md5');
    let newpas = hash.update(data.password);
    newpas = newpas.digest('hex');
    userRepo.createUser(data.firstName, data.lastName, newpas, data.email, data.function);
    res.send("Done");
});

router.post('/login', function(req,res){
    let data = req.body;
    let hash = createHash('md5');
    let newpas = hash.update(data.password);
    newpas = newpas.digest('hex');
    userRepo.login(data.email, newpas)
        .then(user=>{
            user[0] instanceof User;
            if (user[0].password != newpas) {
                res.send(`Incorrect login credentials`);
            }
            else {
                res.send(user[0]);
            }
        });
})

router.get('/getRandom', function (req, res) {
    randomUser(res);
})

function randomUser(res) {
    if (allUsers != null) {
        var random = Math.floor(Math.random() * allUsers.length);
        res.send(allUsers[random]);
    }
    else {
        var user;
        return userRepo.getAllUsers()
            .then(users => {
                allUsers = users;
                var random = Math.floor(Math.random() * allUsers.length); 
                res.send(allUsers[random]);
            });
    }
}

module.exports = router;