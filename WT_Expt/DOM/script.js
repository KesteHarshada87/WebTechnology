function validateForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("message").innerHTML =
            "Name cannot be empty!";
        return false;
    }

    document.getElementById("message").innerHTML =
        "Form submitted successfully. Welcome " + name + "!";

    return false; // Prevent page refresh
}