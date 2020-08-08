$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page


    // todo: get the data from the create a task window
    // todo: smack the post route api/login 
    // todo: create task through task model 
    // todo: send into the database  


    $('#createTask').on('click', (e) => {
        e.preventDefault();
        // * clear the Task created message

        // * get the data from the user 
        let userTask = $('#cityInputValue').val().trim();

        $.post("/api/task", {
            task: userTask,
        })
            .then(function (response) {

                // ! tell the user that you have made a task
                // todo: append the task to the html 

                // * let the user know that the task was created 
                $("#taskCreatedAlert").text('Task Created!!!');
                // * clear the value in the box 
                $("#cityInputValue").val('');

                console.log(response);

                //!maybe a settimout 
                // todo: set timeout to clear the message when it's done


                updateUserTaskList();

            })
            .catch(function (err) {
                console.log(err, 'there was an error in the ');
            });

    });


    // update once a new task is created 
    async function updateUserTaskList() {

        // clear the task created folder 
        // $("#taskCreatedAlert").text('Task Created!!!');

        // make a ajax to call all of the task associated
        let data = await $.get("/api/login/user_data");

        console.log(data);
        console.log(data.user);
        console.log(data.id);

    }

    $.get("/api/login/user_data").then(function (data) {
        let user = data.email;
        $(".employee-name").text(user);

        // this prefilter was used to correct CORS that prevented the ajax from calling 
        $.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        let avatar = 'https://api.adorable.io/avatars/100/';
        let customeIcon = avatar + user;

        $(".icon").attr('src', customeIcon);
    });
});




// ! DO THIS !!!!!!
// todo: link the task to the user that created the task 
// todo  when the button is clicked the task is made 
// todo  THEN ==> we make a ajax call to the database to get all of the 
// todo; associated with this user 





// todo: tasker is a page where everyones task shows up 
// todo: show the name and what their task is 