const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements: ", (arr) => {

    let array = arr.split(/[ ,]+/).map(Number); 

    console.log("Array:", array);

    let n = Math.max(...array);

    let sum = (n * (n + 1)) / 2;
    console.log("Expected sum:", sum);

    let aSum = 0;
    for(let i = 0; i < array.length; i++){
        aSum = array[i] + aSum;
    }

    console.log("Actual sum: " + aSum);
    console.log("Missing number is: " +(sum - aSum));
    rl.close();
});
