const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', (req, res) => {
    res.send('hello this is the department controller'); 
}); 

router.get('/', async (req, res) => {
    let roles = await db.Department.findAll({});
    res.json(roles);
});


//post a user , route => ('api/invitation')
router.post('/', async function (req, res) {
    let department = await db.Department.create({
        name: req.body.name,
        //role_id needs to be linked here
    });
    await res.json(department);
});

// update user by id 
router.put('/:id', async function (req, res) {
    let response = await db.Department.update(
        {
            name: req.body.name,
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

    let response = await db.Department.destroy({
        where: {
            id: req.params.id,
        },
    })
    await res.json(response);

});


module.exports = router; 