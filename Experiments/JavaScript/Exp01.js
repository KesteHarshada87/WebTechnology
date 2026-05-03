const output = document.getElementById("output");

function display(title, content) {
    output.innerHTML += "<b>" + title + "</b><br>";
    output.innerHTML += content + "<br><br>";
}

const z = 10;
let y = 20;
var x = 30;

display("Activity 01: Const, Let, Var Example",
    "const z = " + z + "<br>" +
    "let y = " + y + "<br>" +
    "var x = " + x);

console.log("Activity 01");
console.log("const z =", z);
console.log("let y =", y);
console.log("var x =", x);


{
    var a = 100;
}
{
    let b = 200;
}
{
    const c = 300;
}

display("Activity 02: Block Scope Example",
    "var a = " + a + " (Accessible outside block)<br>" +
    "let b and const c are block scoped");

console.log("Activity 02");
console.log("var a =", a);
console.log("let and const are block scoped");


let firstName = prompt("Enter First Name:");
let lastName = prompt("Enter Last Name:");
let age = Number(prompt("Enter Age:"));
let rollNo = Number(prompt("Enter Roll Number:"));

display("Activity 03: Student Information",
    "Full Name: " + firstName + " " + lastName + "<br>" +
    "Age: " + age + "<br>" +
    "Roll No: " + rollNo);

console.log("Activity 03");
console.log("Full Name:", firstName, lastName);
console.log("Age:", age);
console.log("Roll No:", rollNo);


let num = Number(prompt("Enter a Number:"));
let result = (num % 2 === 0) ? "Even" : "Odd";

display("Activity 04: Even or Odd Check",
    "Number: " + num + "<br>" +
    "Result: " + result);

console.log("Activity 04");
console.log("Number:", num);
console.log("Result:", result);

let studentName = prompt("Enter Student Name:");
let marks = Number(prompt("Enter Marks:"));
let status = (marks >= 35) ? "Pass" : "Fail";

display("Activity 05: Pass or Fail Result",
    "Name: " + studentName + "<br>" +
    "Marks: " + marks + "<br>" +
    "Status: " + status);

console.log("Activity 05");
console.log("Name:", studentName);
console.log("Marks:", marks);
console.log("Status:", status);

let numbers = "";
for (let i = 1; i <= 10; i++) {
    numbers += i + " ";
}

display("Activity 06: Numbers from 1 to 10", numbers);

console.log("Activity 06");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}