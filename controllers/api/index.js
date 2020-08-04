// instance of router 
const router = require('express').Router();
// all of the routes in this folder 
const employee = require('./employee');
const department = require('./department');


// api routes
router.use('/employee', employee);
router.use('/department', department);


module.exports = router;