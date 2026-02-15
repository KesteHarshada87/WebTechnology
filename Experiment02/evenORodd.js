
function check(num){
     if(num % 2 == 0){
        console.log("Entered number is even");
     }
     else{
        console.log("Entered number is odd");
     }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) =>{

    num = Number(num);

    if(isNaN(num)){
        console.log("Enter valid number..");
    }
    else{
        check(num);
    }
    rl.close();
} )