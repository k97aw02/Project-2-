// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// [DONE]
// get all of the linked tasks, complete? 
router.get('/', async (req, res) => {
    let data = await db.Employee_Task.findAll({});
    await res.send(data);
});

// [DONE]
// get all employess working on a task via the TaskId
router.get('/usersBytask/:id', async (req, res) => {
    let key = req.params.id;
    let role = await db.Employee_Task.findAll({ where: { TaskId: key } });
    await res.json(role);
});

// [DONE]
// task status by employee 
// get all tasks being worked on by a employee via the EmployeeId
router.get('/tasksByuser/:id', async (req, res) => {
    let key = req.params.id;
    let role = await db.Employee_Task.findAll({ where: { EmployeeId: key } });
    await res.json(role);
});

//******************************************************** */
//******************************************************** */
//******************************************************** */


// THIS ACTION WILL ASSIGN A POST TO A USER
//post make a new distinction **** work on this
// *****when a user wants to create a new task for themselves or for the board****
// this will be called to assign the task to the user 
router.post('/', async function (req, res) {
    let role = await db.Employee_Task.create({ EmployeeId: req.body.EmployeeId, TaskId: req.body.TaskId});
    await res.json(role);
});

// [DONE]
// THIS WILL MARK THE TASK COMPLETED FOR EVERYONE ONCE SOMEONE UPDATES IT TO COMPLETE
//put make a new distinction **** work on this 
// *****when a user wants to update a task as completed for everyone****
router.put('/:id', async function (req, res) {
    let response = await db.Employee_Task.update(
        {
            completed: req.body.completed,
            // on the front end 
            // we do 1 for true 
            // we do 0 for false
        },
        {
            where: {
                TaskId: req.params.id,
            },
        },
    )
    res.json(response);
});

// // [DONE]
// DELETES A TASK FOR A SPECIFIC EMPLOYEE 
// essentially we are UNASSIGNING THE TASK FOR THAT PERSON 
/// we gotta delete the task from the list of the user  *** work on this 
// when a user wants to no longer be associated with a task 
// when a user wants to deleted a task for everyone
router.delete('/:id', async function (req, res) {
    let key = req.params.id;
    let response = await db.Employee_Task.destroy({
        where: {
            EmployeeId: key,
        },
    })
    await res.json(response);
});


//******************************************************** */
//******************************************************** */
//******************************************************** */


// [DONE]
router.get('*', async function (req, res) {
    res.redirect('/api/employeeTask');
});




module.exports = router; 