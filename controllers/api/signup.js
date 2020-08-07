const router = require("express").Router();
const db = require('../../models');



router.get('/', (req, res) => {
    res.send('this is the api signup route'); 
})

// * this will create a new user
router.post("/", function (req, res) {
    console.log('We hit hte sign up route!!')
    // ! here we take what the user gave us and create a new user
    db.Employee.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(function (data) {
            console.log('We just saved ?????', data)

            // dashboard home paged
            //   res.json(data); 
            // redirect to api to login
            res.redirect(307, '/api/login');

        })
        .catch(function (err) {
            console.log('WE GOT AN ERR!!!', err)
            res.status(401).json(err);
        });
});




module.exports = router;