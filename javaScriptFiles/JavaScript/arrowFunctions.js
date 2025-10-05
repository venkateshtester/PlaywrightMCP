//basic arrow function
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!


//Arrow function with one parameter
const square = x => x * x;
console.log(square(5)); // Output: 25

//Arrow function with multiple params
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12

//Arrow function with Default parameter value
const sayHello = (name = "Guest") => `Hello, ${name}!`;
console.log(sayHello()); // Output: Hello, Guest!
console.log(sayHello("Venkat")); // Output: Hello, Venkat!

//Arrow function with object
const getUser = (id, username) => (
    { id, username }
);
console.log(getUser(1, "javascriptfan"));

//Arrow function with callbacks
const arr = [1, 2, 3];
const squared = arr.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]


