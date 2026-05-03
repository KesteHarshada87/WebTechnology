function submitButtonClick() {

    console.log("Submit button clicked");

    // Get values using DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear old messages
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById('nameError').innerHTML = "Name field is required";
        console.log("Name validation failed");
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById('emailError').innerHTML = "Email field is required";
        console.log("Email validation failed");
        isValid = false;
    }
    else if (!email.includes("@")) {
        document.getElementById('emailError').innerHTML = "Enter valid email";
        console.log("Invalid email format");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Password field is required";
        console.log("Password validation failed");
        isValid = false;
    }

    // Final status
    if (isValid) {
        console.log("Form submitted successfully");
        alert("Form submitted successfully!");
    } else {
        console.log("Form submission failed due to validation errors");
    }
}