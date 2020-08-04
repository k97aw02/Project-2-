// instance of router 
const router = require('express').Router();
// all of the routes in this folder 
const employee = require('./employee');


// api routes
router.use('/employee', employee);


module.exports = router;