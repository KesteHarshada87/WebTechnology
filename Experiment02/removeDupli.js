const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by space: ", (input) => {

    // Convert input string into array of numbers
    let arr = input.split(" ").map(Number);

    let uniqueArr = Array.from(new Set(arr));//convert set into array
    
    console.log("Array after removing duplicates:", uniqueArr);

    rl.close();
});
