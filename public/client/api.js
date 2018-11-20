registerData = {}
loginData = {}

$(function () {

$("#register-btn ").click(function (event) {
    
        registerData.firstName = $('#fname').val()
        registerData.lastName =  $('#lname').val();
        registerData.email = $('#email').val();
        registerData.password = $('#password').val();

        $.ajax({
            type: "POST",
            url: "/register",
            data: JSON.stringify(registerData),
            contentType : "application/json"
        }).done(function () {
            console.log("User Logged In");
        }); 
    }); 

$("#login-btn").click(function () {
    
        loginData.uname = $('#username').val()
        loginData.password =  $('#password').val();
     
        $.ajax({
            type: "POST",
            url: "/login",
            data: JSON.stringify(loginData),
            contentType : "application/json"
        }).done(function () {
            console.log("User Logged In");
        }); 
    }); 
});

    


