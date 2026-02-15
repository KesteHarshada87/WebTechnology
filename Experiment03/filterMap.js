//Used to modify each element of an array
//Returns a new array
//Original array does NOT change

//Multiply each number by 2

let arr = [1, 2, 3, 4];

let result = arr.map(num => num * 2);

console.log(result);

//convert names to uppercase
let names = ["harshada", "apurva", "tanishka"];

let result1 = names.map(name => name.toUpperCase());

console.log(result1);

//Used to select elements based on condition
//Returns a new array
//Only elements that satisfy condition are included

//Get even numbers
let arr1 = [1, 2, 3, 4, 5, 6];

let result2 = arr.filter(num => num % 2 === 0);

console.log(result2);

//Get numbers greater than 10
let nums = [5, 12, 8, 20, 3];

let result3 = nums.filter(num => num > 10);

console.log(result3);

