const router = require("express").Router(); 
const path = require('path'); 

// we need to require the models in here 

// If no API or html routes are hit send to 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});

// login route credentials authentication
router.post('/', async function (req, res) {
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


module.exports = router;