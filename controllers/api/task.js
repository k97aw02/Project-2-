// MODEL [DONE]
// ROUTER 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', async (req, res) => {
    let roles = await db.Task.findAll({});
    await res.json(roles);
});

router.get('/single/:id', async (req, res) => {
    let key = req.params.id;
    let task = await db.Task.findOne({ where: { id: key } });
    await res.json(task);
});

//post a user , route => ('api/invitation')
router.post('/', async function (req, res) {
    let task = await db.Task.create({
        task: req.body.task,
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
    await res.json(response);
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

router.get('*', async function (req, res) {
    res.redirect('/api/task');
});


module.exports = router; 