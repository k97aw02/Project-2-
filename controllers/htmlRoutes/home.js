const router = require("express").Router(); 
const path = require('path'); 

// we need to require the models in here 

// If no API or html routes are hit send to 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
});

// switch this over to handlebars

module.exports = router;