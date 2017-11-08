const Promise = require('bluebird');
const axios = require('axios');

const req = axios.create({
  baseURL: 'http://localhost:8192/'
});

Promise.coroutine(function() {
    let timo = req.post('timo', {
        firstName: 'Timo',
        lastName: 'Hermans',
        password: 'password',
        email: 'timo.hermans@mediaan.com'
    });
    
    console.log('Inserted: ', timo.data);
});