document.addEventListener("DOMContentLoaded", function(){
    const btnLogin = document.getElementById("btn-login")


    btnLogin.addEventListener("click", function(event){
        event.preventDefault()

        const username = document.getElementById("username").value.trim()
        const password = document.getElementById("password").value.trim()

        if(username === ""){
            alert("Please Enter your username")
            return;
        }
        if(password === ""){
            alert("Please Enter your password")
            return;
        }
        if(password.length < 8){
            alert("Password must be atleast 8 charactors long")
            return;
        }

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if(username ===savedEmail && password === savedPassword){
            alert("Login Sucessfull....")
            window.location.href = "/mainpage/index.html"
        }else{
            alert("Invalid Credentials! Please try again or signUp")
        }
    });
});