// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
        return next();
    }

    // if you are a manager then you can see other user profiles
    // (req.user.manager_id)? next(): 

    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/");
};




/// aunthentication for cheking pass checking to see if the person is who they say they are

// and then to let you use the route web token authorization