// this refers to the object that is currently calling the function.
//But ⚠ its value depends on where and how the function is called.

//1️.this inside an Object
let person = {
    name: "Harshada",
    greet: function () {
        console.log(this.name);
    }
};

person.greet();

//2️. this in Global Scope (Node.js)
console.log(this);
//In Node.js, it refers to: {}
//In browser, it refers to: window object

//3️. this inside Normal Function
function show() {
    console.log(this);
}

show();
//In Node.js → undefined
//(In strict mode)

//In browser → window

//4️. this in Arrow Function 
//Arrow functions do NOT have their own this.
//They take this from their surrounding (parent) scope.
let person1 = {
    name: "Harshada",
    greet: () => {
        console.log(this.name);
    }
};

person1.greet();
//Output:
//undefined
// Because arrow function does not bind its own this.

//5️. this in Constructor Function
function Person(name) {
    this.name = name;
}

let p1 = new Person("Harshada");

console.log(p1.name);
//Output:
//Harshada
// Here this refers to the new object created using new.