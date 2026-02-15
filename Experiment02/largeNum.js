const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers: ", (arr) => {
    let array = arr.split(/[ ,]+/).map(Number);
    let temp = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < array.length; i++){
        if(array[i] > temp){
            temp = array[i];
        }
    }
    console.log("Largest Number in array is: " + temp);
    rl.close();
} )