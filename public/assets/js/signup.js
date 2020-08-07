/// this creates a user throught this ajax calls
$("#signup-button").on('click', function (event) {
    event.preventDefault();

    // * make the user 
    let email = $("#username").val().trim();
    let password = $("#password").val().trim();

    //// console.log('we got clicked!!', email, password)
    //// diving into the codebase in about 3 hour chunks 

    // post for registration
    // post for login
    $.ajax("/signup", {
        type: 'post',
        data: { email: email, password: password }
    })
        .then((response) => {
            // clear data from form
            $("#username").val('');
            $("#password").val('');


            window.location.replace("/api/employee");

            ////console.log("we got this back from the route!!", response)
            //* how to serve the new page to the user 
        })
        .catch((err) => {

        });
})