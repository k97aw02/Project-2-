$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page


    // todo: get the data from the create a task window
    // todo: smack the post route api/login 
    // todo: create task through task model 
    // todo: send into the database  


    $('#createTask').on('click', (e) => {
        e.preventDefault();
        // * get the data from the user 
        let userTask = $('#cityInputValue').val().trim();

        $.post("/api/task", {
            task: userTask,
        })
            .then(function (response) {
                // ! tell the user that you have made a task
                // todo: append the task to the html 

                $("#taskCreatedAlert").text('Task Created!!!');

                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err, 'there was an error in the ');
            });


    });

});