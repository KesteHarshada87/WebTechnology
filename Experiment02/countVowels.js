const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  console.log(name);

  let count = 0;
  for(let i = 0; i <= name.length; i++ ){
  if(name.charAt(i) == 'a' || name.charAt(i) == 'e' || name.charAt(i) == 'i' || name.charAt(i) == 'o' || name.charAt(i) == 'u' ||
      name.charAt(i) == 'A' || name.charAt(i) == 'E' || name.charAt(i) == 'I' || name.charAt(i) == 'O' || name.charAt(i) == 'U'
     ){
    count++;
      }
  }
     console.log("Count of vowels:" +count);

     rl.close();
  
});
