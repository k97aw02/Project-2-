/// MODEL [DONE]
// ROUTER EXPRESS
const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')


router.get('/', async (req, res) => {
    let department = await db.Department.findAll({});
    res.json(department);
});

router.get('/single/:id', async (req, res) => {
    let key = req.params.id;
    let department = await db.Department.findOne({ where: { id: key } });
    await res.json(department);
});

//post 
router.post('/', async function (req, res) {
    let department = await db.Department.create({name: req.body.name});
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

router.get('*', async function (req, res) {
    res.redirect('/api/department');
});



module.exports = router; 