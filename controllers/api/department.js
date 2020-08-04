const router = require('express').Router(); 

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', (req, res) => {
    res.send('hello this is the department route'); 
}); 


module.exports = router; 