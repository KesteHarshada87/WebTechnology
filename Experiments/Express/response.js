const express = require('express'); // import express
const app = express(); // create express app
const PORT = 3000;

application.get('/',(request,response=> {
    const T= new Date();
    response.json({message:"Hello",
        time:T
    })
}))
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port})`)
})