let username = $("input#username").val();
let password = $("input#password").val();  

$("#Log in").submit(function(event){
	event.preventDefault();
$.ajax("/api/login:ID", {           
    type: 'get',
    data: {username, password} 
  });
})
