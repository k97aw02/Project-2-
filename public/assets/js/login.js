console.log('JS FILE IS LOADED!!!')

// $("#login").on('click', async function (event) {
//   event.preventDefault();

//   let email = $("#username").val().trim();
//   let password = $("#password").val().trim();
//   console.log('we got clicked!!', email, password);

//   // * soft validation to check that these inputs are not empty 
//   if (!email || !password) {
//     return;
//   }

//   // post for registration 
//   // post for login
//   let response = await $.ajax("/login", { type: 'post', data: { email: email, password: password } });


//   console.log("we got this back from the route!!", response)

//   // received email any other info 
//   // $('card').appemd()

// });


/// this creates a user throught this ajax calls
$("#signup-button").on('click', function (event) {
  event.preventDefault();

  // * make the user 
  let email = $("#username").val().trim();
  let password = $("#password").val().trim();

  //// console.log('we got clicked!!', email, password)

  // post for registration
  // post for login
  $.ajax("/signup", {
    type: 'post',
    data: { email: email, password: password }
  })
    .then((response) => {
      console.log("we got this back from the route!!", response)
    })
    .catch((err) => {

    });
})
