$(document).ready(function () {
    // let updateUserTaskList = require('./createTask'); 
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/login/user_data").then(function (data) {
        let full_name = data.full_name;
        console.log(data.full_name);
        let email = data.email;
        console.log(data.email);
        let role = (data.role_ID.role);
        console.log(data)
        $(".employee-name").text(full_name);
        $(".employee-email").text(email);
        $(".employee-role").test(role);


});
})
