document.addEventListener("DOMContentLoaded", function(){
    const signupBtn = document.getElementById("btn-signup")

    signupBtn.addEventListener("click", function(e){
        e.preventDefault()

        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value.trim()

        if(!email){
            alert("Please Enter your Email")
            return;
        }
        if(!password){
            alert("Please Enter your password")
            return;
        }
        if(password.length < 8){
            alert("Password must be atleast 8 characters long")
            return;
        }

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("SignUp Sucessful!. Redirecting to login page...");
        window.location.href = "/index.html"
    });
});