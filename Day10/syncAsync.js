/*Theory :
Synchronous js :
    1)code execute line by line.
    2)each task waits for previous task to finish.
    3)Blocking nature.
    4)JS is by default single threaded and synchronous.
    */
   console.log("Start");
   //const add = (a, b) => a + b;
   function add(a,b){
    return a+b;
   }

   let result = add(6,3);
   console.log(result);
   console.log("End");

/*
Asynchronous in JS:
    1)some tasks take time :file read, api call, database, timer.
    2)JS does not wait, it moves to nextline : non-bloking nature.
    3)uses: fetching data from server , reading file , set-timeout, api calls 
    4)ex:-*/
    console.log("Start");
   setTimeout(() => {
    console.log("Inside timeout");
    
}, 2000); // 2000 milliseconds = 2 seconds
    console.log("End");
    //setTimeout is a asynchronous it waits 2 seconds , meanwhile JS prints END  after 2 sec it get inside timeout 
    
    /*Activity:
    Guess the o/p game count,
    blocking and non bloking,
    2 ex'sreal-time: async and sync ,
    api fetching.
    
    */    