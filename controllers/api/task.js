const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', async (req, res) => {
    let roles = await db.Task.findAll({}); 
    res.json(roles); 
}); 


//post a user , route => ('api/invitation')
router.post('/', function (req, res) {
  db.Task.create({
    task: req.body.title,
    //role_id needs to be linked here
  }).then(function (dbCreateInvitation) {
    res.json(dbCreateInvitation);
  });
});

module.exports = router; 