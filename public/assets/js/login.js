// mergin for fix
$(document).ready(function() {

  // When the form is submitted, we validate there's an email and password entered
  $("form.login").on("submit", function(event) {
    event.preventDefault();

  // Getting references to our form and inputs
  let emailInput = $("#username").val().trim();
  let passwordInput = $("#password").val().trim();


    if (!emailInput || !passwordInput) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(emailInput, passwordInput);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(response) {
        window.location.replace("/home");
        // If there's an error, log the error
        console.log(response)
      })
      .catch(function(err) {
        console.log(err);
        
      });
  }
});
