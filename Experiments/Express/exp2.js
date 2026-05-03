const express = require('express');
const app = express();
const PORT = 3000;
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Dynamic Routing Demo</h1>
            <script>
                console.log("1. Welcome to Dynamic Routing Example");
            </script>
        </body>
        </html>
    `);
});
app.get('/user/:name', (req, res) => {
    const name = req.params.name;

    res.send(`
        <html>
        <body>
            <h1>User Page</h1>
            <script>
                console.log("2. Hello, ${name}");
            </script>
        </body>
        </html>
    `);
});
app.get('/student/:name/:course', (req, res) => {
    const name = req.params.name;
    const course = req.params.course;
    res.send(`
        <html>
        <body>
            <h1>Student Details</h1>
            <script>
                console.log("3. Student Name: ${name}");
                console.log("4. Course: ${course}");
            </script>
        </body>
        </html>
    `);
});
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});