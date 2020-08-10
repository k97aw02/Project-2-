$(document).ready(function () {
    // let updateUserTaskList = require('./createTask'); 
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/login/user_data").then(function (data) {
        let user = data.email;
        $(".employee-email").text(user);


});


