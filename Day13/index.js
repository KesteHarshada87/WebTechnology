const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is about page!')
})

app.get('/login', (req, res) => {
  res.send('Login with credentials!')
})

app.get('/versions', (req, res) => {
  res.send('Explore other versions of app')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});