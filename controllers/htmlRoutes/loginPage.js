
const router = require("express").Router(); 
const path = require('path'); 


// this is the first place the user will be 
router.get("/", function (req, res) {
    console.log('sending the render index to the page')

    // **** render the login page for the user to see 
    // ** this is rendering the login page !!!!!!!
    res.render("index");
});



module.exports = router;