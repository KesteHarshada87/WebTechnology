//For loop
//Used when you know how many times to run the loop.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//while Loop
//Runs while condition is true
let j = 1;

while (j <= 5) {
    console.log(j);
    j++;
}

//do while
//Runs at least once, even if condition is false.
let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

//for...of Loop
// Used to iterate over array values.
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

//for...in Loop
//Used to iterate over object keys.
let person = {
    name: "Harshada",
    age: 22
};

for (let key in person) {
    console.log(key, ":", person[key]);
}
