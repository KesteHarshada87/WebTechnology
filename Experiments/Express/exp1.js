const express = require('express');
const app = express();
const PORT = 3000;
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    next(); 
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Welcome Page</h1>
            <script>
                console.log("1. Welcome to Express Server");
            </script>
        </body>
        </html>
    `);
});
app.get('/about', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>About Page</h1>
            <script>
                console.log("2. This is About Page");
            </script>
        </body>
        </html>
    `);
});
app.use((req, res) => {
    res.status(404).send('Page Not Found ');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});