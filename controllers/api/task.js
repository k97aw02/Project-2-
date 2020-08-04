const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', async (req, res) => {
    let roles = await db.Task.findAll({});
    res.json(roles);
});


//post a user , route => ('api/invitation')
router.post('/', async function (req, res) {
    let task = await db.Task.create({
        task: req.body.task,
        //role_id needs to be linked here
    });
    await res.json(task);
});

// update user by id 
router.put('/:id', async function (req, res) {
    let response = await db.Task.update(
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

    let response = await db.Task.destroy({
        where: {
            id: req.params.id,
        },
    })
    await res.json(response);

});

module.exports = router; 