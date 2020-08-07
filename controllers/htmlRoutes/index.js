// creating an instance of the express router 
const router = require('express').Router();

// require the routes available in this folder 
const login = require('./login');
const signup = require('./signup');
const home = require('./home'); 

// html routes
router.use('/', login);
router.use('/signup', signup);
router.use('/home', home);


module.exports = router; 