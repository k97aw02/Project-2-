// instance of router 
const router = require('express').Router();
// all of the routes in this folder 
const employee = require('./employee');
const department = require('./department');
const task = require('./task');


// api routes
router.use('/employee', employee);
router.use('/department', department);
router.use('/task', task);


module.exports = router;