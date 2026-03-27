const express = require('express')
const app = express()
const port = 3000

// function checkRoute(res, req, next){
//     console.log(request.url);
//     next();//very imp if not then next all page will be hang
// }

app.use((req, res, next) => {
    console.log('Data received', new Date());
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})