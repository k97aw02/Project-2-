// express will hit this index route first before hitting anything else 
const path = require('path');
const router = require('express').Router();
// const apiRoutes = require('./api');
// const htmlRoutes = require('./api');

// API Routes
// router.use('/api', apiRoutes);

// HTML Routes 
// router.use('/', htmlRoutes);

// If no API or html routes are hit send to 
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

module.exports = router;