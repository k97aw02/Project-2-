// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// all employees 
router.get('/', async (req, res) => {

    let data = await db.Employee.findAll({});
    await res.json(data);
});

//post a user , route => ('api/invitation')
router.post('/', async function (req, res) {
    let task = await db.Employee.create({
        task: req.body.task,
        //role_id needs to be linked here
    });
    await res.json(task);
});

// update user by id 
router.put('/:id', async function (req, res) {
    let response = await db.Employee.update(
        {
            task: req.body.task,
        },
        {
            where: {
                id: req.params.id,
            },
        },
    )

    res.json(response);

});

// delete Task by id 
router.delete('/:id', async function (req, res) {

    let response = await db.Employee.destroy({
        where: {
            id: req.params.id,
        },
    })
    await res.json(response);

});



module.exports = router; 