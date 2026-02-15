const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));

//If function has only one line, we can write it shorter:
const square = num => num * num;

console.log(square(4));


//Only one parameter → no need for brackets
//Only one statement → no need for {} and return

const greet = name => "Hello " + name;

console.log(greet("Harshada"));
