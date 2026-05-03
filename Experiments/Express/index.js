const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to the home page!')
})

app.get('/about',(req,res) => {
    res.send('Welcome to About page!')
})

app.get('/login', (req, res) => {
    res.send("Welcome to login page!")
})

app.get('/contact', (req, res) => {
    res.send("Welcome to contact page!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
