// instance of the router 
const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('hello'); 
}); 



module.exports = router; 