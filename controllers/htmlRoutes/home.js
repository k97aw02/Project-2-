const router = require("express").Router();
const path = require("path");

router.get("./home", function (req, res) {
  homepage.all(function (data) {
    var homeObject = {
      homepage: data,
    };
    console.log(homeObject);
    res.render("home", homeObject);
  });
});


// If no API or html routes are hit send to 
router.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, '../../public/home.html'));
    console.log('inside the get for home')
    /// with orm model 
    // lets serve some data about the user 

    res.render('home'); 

});

// switch this over to handlebars

module.exports = router;
