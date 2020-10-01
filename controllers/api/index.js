// instance of router 
const mysql = require('../../config/config');
const router = require('express').Router();
// all of the routes in this folder 
const employee = require('./employee');
const department = require('./department');
const task = require('./task');
const role = require('./role');
const employeeTask = require('./employeeTask');
const directory = require('./directory');

//! api login 
const login = require('./login');
const signup = require('./signup');

// api routes
router.use('/employee', employee);
router.use('/department', department);
router.use('/task', task);
router.use('/role', role);
router.use('/employeeTask', employeeTask);
router.use('/directory', directory);

// ! api login/registration routes
router.use('/login', login);
router.use('/signup', signup);




module.exports = router;