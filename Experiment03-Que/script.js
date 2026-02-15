// Get form element
let form = document.getElementById("myForm");

// Add submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();  // Stop form from submitting

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("message");

    // Validation
    if (name === "") {
        message.textContent = "Name cannot be empty";
        message.className = "error";
        return;
    }

    // Email validation using regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        message.textContent = "Enter valid email address";
        message.className = "error";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters";
        message.className = "error";
        return;
    }

    // If all validations pass
    message.textContent = "Registration Successful!";
    message.className = "success";

    // DOM Manipulation: Change background color
    document.body.style.backgroundColor = "#e6ffe6";

});
