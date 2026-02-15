//Number Functions

let x = Number("10");
console.log(x);  // 10

let x1 = parseInt("25.89");
console.log(x1);   // 25

let x2 = parseFloat("25.89");
console.log(x2);   // 25.89

let x3 = 5.6789;
console.log(x3.toFixed(2));  // 5.68

console.log(isNaN("Hello"));  // true
console.log(isNaN(10));       // false

//Math Functions

console.log(Math.round(4.6));  // 5

console.log(Math.floor(4.9));  // 4

console.log(Math.ceil(4.1));  // 5

console.log(Math.random());

let num = Math.floor(Math.random() * 10) + 1;
console.log(num);

console.log(Math.max(10, 20, 5));  // 20
console.log(Math.min(10, 20, 5));  // 5

console.log(Math.sqrt(16));  // 4

//Date,Time function

let today = new Date();
console.log(today);

let d = new Date();

console.log(d.getFullYear());   // Year
console.log(d.getMonth());      // Month (0-11)
console.log(d.getDate());       // Day
console.log(d.getHours());      // Hours
console.log(d.getMinutes());    // Minutes
console.log(d.getSeconds());    // Seconds

let d1 = new Date();
d1.setFullYear(2030);
console.log(d1);

console.log(Date.now());


