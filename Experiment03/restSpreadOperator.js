//Spread Operator (...)
//Spread means expand or unpack values.
//Used to:
//Copy arrays
//Merge arrays
//Pass multiple values
//1: Copy an Array
let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);

//2: Merge Arrays
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged);

//3: Spread in Function Call
let nums = [5, 10, 15];

console.log(Math.max(...nums));

//2. Rest Operator (...)
//Rest means collect remaining values.
//Used in:
//Function parameters

//1: Rest in Function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

//2: Rest with Normal Parameters
function show(a, b, ...others) {
    console.log(a);
    console.log(b);
    console.log(others);
}

show(1, 2, 3, 4, 5);

//