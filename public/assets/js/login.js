let email = $("input#username").val();
let password = $("input#password").val();  

$("#Log in").submit(function(event){
	event.preventDefault();
$.ajax("/api/login:ID", {           
    type: 'get',
    data: {email, password} 
  })
  .then((response) => {

  })
  .catch((err) => {

  }); 
})
