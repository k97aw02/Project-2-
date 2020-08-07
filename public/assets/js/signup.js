/// this creates a user throught this ajax calls
$("#signup-button").on('click', function (event) {
    event.preventDefault();
    console.log('pressing the signup-button')
    // * make the user 
    let email = $("#username").val().trim();
    let password = $("#password").val().trim();
    //// console.log('we got clicked!!', email, password)
    //// diving into the codebase in about 3 hour chunks 
    // post for registration
    // post for login
    $.ajax("/signup", {
        type: 'POST',
        data: { email: email, password: password }
    })
        .then((response) => {
            // clear data from form
            $("#username").val('');
            $("#password").val('');

            console.log('about to replace')
            // serving the new page
            window.location.replace("/home");
            // location.reload
            ////console.log("we got this back from the route!!", response)
            //* how to serve the new page to the user 
        })
        .catch((err) => {

        });
})