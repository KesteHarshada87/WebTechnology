const express = require("express");

const app = express();

// Dynamic Route using URL Parameter
app.get("/user/:name", (req, res) => {
    const username = req.params.name;
    res.send("Welcome " + username);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});