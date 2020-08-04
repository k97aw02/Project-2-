// creating an instance of the express router 
const router = require('express').Router();

// require the routes available in this folder 
const login = require('./login');

// api routes
router.use('/', login);


module.exports = router; 