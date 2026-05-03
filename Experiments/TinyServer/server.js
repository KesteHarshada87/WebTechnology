// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Hello, this is my Tiny HTTP Server!</h1>");
    res.end();
});

// Define port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});