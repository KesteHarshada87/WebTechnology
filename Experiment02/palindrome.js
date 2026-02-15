const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }

    if (str === reversed) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }

    rl.close();
});
