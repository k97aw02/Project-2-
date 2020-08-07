const router = require("express").Router();
const path = require('path');
var db = require('../../models')

var passport = require('../../config/passport.js')
var isAuthenticated = require('../../config/middleware/isAuthenitcated')
// we need to require the models in here 

// If no API or html routes are hit send to 
// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../public/login.html'));
// });

console.log('in the login file')


router.get("/", function (req, res) {
    console.log('sending the render index to the page')
    // cat.all(function (data) {
    //     var hbsObject = {
    //         cats: data
    //     };
    //     console.log(hbsObject);
    //     // THIS IS WHERE we send back the data
    // });
    // ? render the login page to for the user to see 
    // ** this is rendering the login page !!!!!!!
    res.render("index");
});



// jeff *****
// todo: use validation on the front-end
// todo name, password, not empty,
// todo: get authentication working
// todo: 


// work on authentication with the login ***** 
// this is priority 

// login route credentials authentication
router.post('/', async function (req, res) {
    console.log('We hit the login post route!!!')
    try {
        let userCredential = req.body;
        let password = userCredential.password;
        let email = userCredential.email;

        //comapre them to a user 
        // if it doesn't error message

        let employee = await db.Employee.findOne({
            email: key.email,
            password: key.password,
        });

        // we render the next the next page
        if (email === employee.email && bcrypt.compareSync(password, employee.password)) {
            // show home page
            // how would this know which user is signed in 
            // HANDLEBARS RENDER 
            // res.render("index", hbsObject);
        } else {
            // try again 
            // res.render() property to send 
            res.send('please try again the email/password is not valid');
        }

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

router.post("/login", passport.authenticate("local"), function (req, res) {
    //
    res.json(req.user);
    // todo: redirect to dashboard 
    res.render('dashboard')
});

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

// this is a private route 
router.get('/privateTest', isAuthenticated, function (req, res) {
    res.send('THIS I S APRIVEATE ROUTE u should bloged in to see this')
});


// validation here on the controller 
router.post('/', async function (req, res) {
    db.Employee.create({

    })
    // send this to the user 
});




module.exports = router;