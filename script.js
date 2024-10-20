
    function validateLogin() {
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var message = document.getElementById("message");

        if (username === "" || password === "") {
            message.style.color = "red";
            message.textContent = "Both fields are required.";
        } 
        else if (username === "admin" && password === "1234") {
            message.style.color = "green";
            message.textContent = "Login successful!";
        } 
        else {
            message.style.color = "red";
            message.textContent = "Invalid username or password.";
        }
    }
