const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (string) =>{

    let reversed = string.split("").reverse().join("");

    console.log(reversed);
    rl.close();
});