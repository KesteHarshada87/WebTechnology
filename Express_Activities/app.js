const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static('public'));

// EJS
app.set('view engine', 'ejs');

// Custom Middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('index', { name: "Tejshree" });
});

app.post('/user', (req, res) => {
  res.send("User Created");
});

app.put('/user', (req, res) => {
  res.send("User Updated");
});

app.delete('/user', (req, res) => {
  res.send("User Deleted");
});

// Query param
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.send(`Name: ${name}, Age: ${age}`);
});

// Router
const router = express.Router();

router.get('/about', (req, res) => {
  res.send("About Page");
});

app.use('/api', router);

// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});