const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
  const name = req.query.name

  console.log(name) // log before sending response

  res.send(`Hello ${name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})