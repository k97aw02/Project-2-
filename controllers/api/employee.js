// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

router.get('/', (req, res) => {
    res.send('hello this is the employee controller'); 
}); 



module.exports = router; 