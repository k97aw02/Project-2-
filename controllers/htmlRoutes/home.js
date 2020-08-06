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

// // If no API or html routes are hit send to
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// switch this over to handlebars

module.exports = router;
