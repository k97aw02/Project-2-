// express will hit this index route first before hitting anything else 
// make a new router 
const router = require('express').Router();


const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');


router.use('/api', apiRoutes);
router.use('/', htmlRoutes);


module.exports = router; 

