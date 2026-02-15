//syntax-->
//condition ? value_if_true : value_if_false;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {

    num = Number(num);   // Convert string to number

    let result = (num % 2 === 0) ? "Even Number" : "Odd Number";

    console.log(result);

    rl.close();
});
