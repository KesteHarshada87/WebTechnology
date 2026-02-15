const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements: ", (arr) =>{

    let array = arr.split(/[ ,]+/).map(Number);
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }

    console.log("Sum is: " +sum);
    rl.close();
})