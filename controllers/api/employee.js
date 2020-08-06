// instance of the router 
const router = require('express').Router();
const employee = require('./employee');
const bcrypt = require('bcryptjs');


/// require the db to pull data from models 
let db = require('../../models')

// all employees and task
router.get('/', async (req, res) => {
    // let data = await db.Employee.findAll({});
    // await res.json(data);
    let data = await db.Employee.findAll({ include: [db.Task] });
    await res.send(data);
});

router.get('/single/:id', async (req, res) => {
    let key = req.params.id;
    let employee = await db.Employee.findOne({ where: { id: key } });
    await res.json(employee);
});

// registration route 
router.post('/', async function (req, res) {
    try {
        let key = req.body;
        console.log(key)
        let employee = await db.Employee.create({
            full_name: key.full_name,
            email: key.email,
            salary: key.salary,
            phone_number: key.phone_number,
            password: key.password,
            role_ID: key.role_ID
        });
        res.json(employee);

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

// login route credentials
router.post('/', async function (req, res) {
    try {
        let userCredential = req.body;
        let password = userCredential.password;
        let email = userCredential.email;

        //comapre them to a user 
        // if it doesn't error message

        let employee = await db.Employee.findOne({
            email: key.email,
            password: key.password,
        });

        // we render the next the next page
        if (email === employee.email && bcrypt.compareSync(password, employee.password)) {
            // show home page
            // HANDLEBARS RENDER 
            // res.render("index", hbsObject);
        } else {
            // try again 
            res.send('please try again the email/password is not valid'); 
        }

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
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

// [DONE]
router.get('*', async function (req, res) {
    res.redirect('/api/employee');
});


module.exports = router; 