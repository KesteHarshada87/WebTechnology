const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter something: ", (input) => {

    let value;

    if (input === "null") {
        value = null;
    } else if (input === "undefined") {
        value = undefined;
    } else {
        value = Number(input);
    }

    if (value) {
        console.log("Truthy Value");
    } else {
        console.log("Falsy Value");
    }

    rl.close();
});


//falsy values-->
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

//Truthy values-->
// 1
// -5,-9
// "hello"
// "0"
// []
// {}
// true
