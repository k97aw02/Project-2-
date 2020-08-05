// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// this will get all of the task and people associated
router.get('/', async (req, res) => {
    let data = await db.Employee.findAll({include:[db.Task]});
    await res.send(data);
});

// [DONE]
router.get('*', async function (req, res) {
    res.redirect('/api/employeeTask');
});




module.exports = router; 