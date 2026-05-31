const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request received:", req.url);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});