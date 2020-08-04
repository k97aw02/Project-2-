// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// all employees 
router.get('/', async (req, res) => {

    let data = await db.Employee.findAll({});
    res.send(data);
});


router.post('/', async (req, res) => {

    let users = await db.Employee.create({
        full_name: 'another erik',
        email: "dluna5629@icloud.com",
        password: 'mypassword2'
    });
    let data = await db.Employee.findAll({});
    res.send(data);
});



module.exports = router; 