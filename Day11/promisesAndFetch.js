//1
let myPromise = new Promise((resolve, rejected) =>{
    let success = false;
    if(success){
        resolve("Data fetch success");
    }else{
        rejected("Error while fetching data");
    }
});

myPromise.then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error);
});

//2
const myProm = new Promise((resolve, rejected) =>{
    setTimeout(() =>{
        console.log("Asynchronous task completed");
        resolve();
    }, 3000);
})

myProm.then(() =>{
    console.log("Promise consume");
})

//3
const pro = new Promise((resolve, rejected) =>{
    setTimeout(() =>{
        resolve({userName: "Harshada", id: 52})
    }, 2000)
})

pro.then((user) =>{
    console.log(user);
})

//4
//syntax--fetch('url')
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((Response) =>{
    return Response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})