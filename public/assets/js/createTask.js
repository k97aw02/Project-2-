$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page


    // todo: get the data from the create a task window
    // todo: smack the post route api/login 
    // todo: create task through task model 
    // todo: send into the database  


    $('#createTask').on('click', (e) => {
        e.preventDefault(); 


        let task = $('#cityInputValue').val().trim(); 


        $.post("/api/login", {
            task: task,
        })
            .then(function () {
                window.location.replace("/members");
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err, 'this is the error');
            });


    }); 

});