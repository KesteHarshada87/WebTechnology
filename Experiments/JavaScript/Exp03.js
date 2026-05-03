// Select form
const form = document.getElementById("myForm");

// Add event listener
form.addEventListener("submit", function(event) {

    event.preventDefault();  // Prevent form refresh

    console.log("Form submitted");   // Console Output

    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    let message = document.getElementById("message");

    // Validation
    if (name === "" || email === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
        console.log("Validation Failed");
    }
    else if (!email.includes("@")) {
        message.innerHTML = "Enter valid email!";
        message.style.color = "red";
        console.log("Invalid Email");
    }
    else {
        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";
        console.log("Validation Successful");

        // DOM Manipulation
        document.body.style.backgroundColor = "lightyellow";
    }

});