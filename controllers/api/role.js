const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', async (req, res) => {
    let roles = await db.Role.findAll({}); 
    res.json(roles); 
}); 


router.get('/single/:id', async (req, res) => {
  let key = req.params.id;
  let role = await db.Role.findOne({ where: { id: key } });
  await res.json(role);
});

//post 
router.post('/', async function (req, res) {
  let role = await db.Role.create({title: req.body.title});
  await res.json(role);
});

// update user by id 
router.put('/:id', async function (req, res) {
  let response = await db.Role.update(
      {
        title: req.body.title,
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

  let response = await db.Role.destroy({
      where: {
          id: req.params.id,
      },
  })
  await res.json(response);

});

router.get('*', async function (req, res) {
  res.redirect('/api/role');
});




module.exports = router; 