// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// all employees 
router.get('/', async (req, res) => {

    let data = await db.Employee.findAll({});
    res.json(data);
});


// router.post('/', async (req, res) => {

//     console.log(req.body);

//     let user = await db.Employee.create({
//         full_name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }); 

//     res.send(user);

// });

// // get all invitation information , route => ('api/invitation')
// router.get('/', function (req, res) {
//   db.Invitation.findAll({}).then(function (dbInvitation) {
//     res.json(dbInvitation);
//   });
// });

// post a user , route => ('api/invitation')
// router.post('/', function (req, res) {
//   db.Invitation.create({
//     status: req.body.status,
//   }).then(function (dbCreateInvitation) {
//     res.json(dbCreateInvitation);
//   });
// });

// // update user by id , route => ('api/invitation/:id')
// router.put('/:id', function (req, res) {
//   db.Invitation.update(
//     {
//       status: req.body.status,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     },
//   ).then(function (dbUpdateInvitation) {
//     res.json(dbUpdateInvitation);
//   });
// });

// // delete user by id , route => ('api/invitation/:id')
// router.delete('/:id', function (req, res) {
//   db.Invitation.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(function (dbInvitationDelete) {
//     res.json(dbInvitationDelete);
//   });
// });



module.exports = router; 