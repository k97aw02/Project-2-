const router = require("express").Router();
const path = require('path');
var db = require('../../models')



// * this will create a new user
router.post("/signup", function (req, res) {
    console.log('We hit hte sign up route!!')
    db.Employee.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(function (data) {
            console.log('We just saved ?????', data)

            // dashboard home paged
            res.redirect("/api/employee");

        })
        .catch(function (err) {
            console.log('WE GOT AN ERR!!!', err)
            res.status(401).json(err);
        });
});




module.exports = router;