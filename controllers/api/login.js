const router = require("express").Router();
const path = require('path');
var db = require('../../models')

var passport = require('../../config/passport.js')
var isAuthenticated = require('../../config/middleware/isAuthenitcated')


// jeff *****
/// TOP PRIORITY GET IT WORKING THEN OPTIMIZE
/// ********************************************
// ! work on authentication with the login ***** 
// todo: use validation on the front-end
// todo name, password, not empty,
// todo: get authentication working

// the authenticate local saves it in the req
router.post("/", passport.authenticate("local"), function (req, res) {
    console.log('returning the json req.user')
    res.json(req.user);
});

// using the data that sent to the req to pull up
//** the user info **\\
router.get("/user_data", function (req, res) {
    console.log('this is the req', req);
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    }
});



// this is a private route 
router.get('/privateTest', isAuthenticated, function (req, res) {
    res.send('THIS I S APRIVEATE ROUTE u should bloged in to see this')
});



module.exports = router;