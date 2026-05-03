// Import HTTP module
const http = require("http");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {

    console.log("Request received from browser");   // Console Output in Node

    // Read HTML file
    fs.readFile("Exp04.html", (err, data) => {

        if (err) {
            res.writeHead(500);
            res.end("Error loading file");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });

});

// Run server on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});