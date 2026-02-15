const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter count of number:", (num) =>{
    
    num = Number(num);

    if(isNaN(num) || num < 0){
        console.log("Enter valid positive number..");
        rl.close();
        return;
    }

    let a = 0, b = 1;
    if(num >= 1){
         console.log(a);
    }
    
    if(num >= 2){
        console.log(b);
    }

    for(let i = 2; i < num; i++){
        let c = a + b;
        a = b;
        b = c;
        console.log(c);
    }


    rl.close();
})