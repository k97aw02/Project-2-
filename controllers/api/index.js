// instance of router 
const router = require('express').Router();
// all of the routes in this folder 
const employee = require('./employee');
const department = require('./department');
const task = require('./task');
const role = require('./role');
const employeeTask = require('./employeeTask');
const register = reqiure('./register');


// api routes
router.use('/employee', employee);
router.use('/department', department);
router.use('/task', task);
router.use('/role', role);
router.use('/employeeTask', employeeTask);
router.use('/register', register);


module.exports = router;