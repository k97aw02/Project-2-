// This is middleware for restricting routes a user is not allowed to visit if not logged in
  module.exports = function (req, res, next) {
      // if the user is logged in then go the next request
      // if not then redirect back to the login page 
      req.user? next(): res.redirect('/');  
  }