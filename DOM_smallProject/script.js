// Select elements
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");

let loginPage = document.getElementById("loginPage");
let homePage = document.getElementById("homePage");

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

let errorMsg = document.getElementById("error");
let welcomeMsg = document.getElementById("welcomeMsg");

// Login button click
loginBtn.addEventListener("click", function () {

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    // Check empty fields
    if (username === "" || password === "") {
        errorMsg.textContent = "Please fill all fields!";
        return;
    }

    // Hardcoded login credentials
    if (username === "admin" && password === "1234") {

        // Hide login page
        loginPage.style.display = "none";

        // Show home page
        homePage.style.display = "block";

        // Show success message
        welcomeMsg.textContent = "Login Successful! Welcome " + username;

        errorMsg.textContent = "";

    } else {
        errorMsg.textContent = "Invalid Username or Password!";
    }
});

// Logout button click
logoutBtn.addEventListener("click", function () {

    homePage.style.display = "none";
    loginPage.style.display = "block";

    // Clear fields
    usernameInput.value = "";
    passwordInput.value = "";
    errorMsg.textContent = "";
});
