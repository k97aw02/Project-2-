const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', async (req, res) => {
    let roles = await db.Role.findAll({}); 
    res.json(roles); 
}); 


//post a user , route => ('api/invitation')
router.post('/', function (req, res) {
  db.Role.create({
    title: req.body.title,
    //role_id needs to be linked here
  }).then(function (response) {
    res.json(response);
  });
});


module.exports = router; 