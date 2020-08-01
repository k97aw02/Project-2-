const db = require("../models");
const User = db.user;

const email = req.body.email;
const password = req.body.password;

checkLogIn = (req, res, next) => {
// Username
  User.findOne({ email }).then(user => {
    if (!user) {
      res.status(400).send({
        message: "Failed! Username not found!"
      });
      return;
    };
//Check password
    User.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        res.message("login successful");    
    }
        else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });



module.exports = "#";