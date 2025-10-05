const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(e => e * 2); // [2, 4, 6]
console.log(doubleNumbers);

console.log("-------");
//filter
//print only even nos
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6, 8, 10]

console.log("-------");
//filter
//select all female employees over 30
const employees = [
  { name: "Alice", age: 32, gender: "F" },
  { name: "Bob", age: 28, gender: "M" },
  { name: "Carol", age: 35, gender: "F" }
];
const selected = employees.filter(emp => emp.age > 30 && emp.gender === "F");
console.log(selected);
// Output: [{ name: "Alice", age: 32, gender: "F" }, { name: "Carol", age: 35, gender: "F" }]

console.log("-------");
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((e, num) => e + num, 0);
console.log(sum); // Output: 15

console.log("------");
//count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, 
{});

console.log(count); 
// { apple: 3, banana: 2, orange: 1 }
console.log("------");

//check if all numbers are positive
const numbers4 = [1, 2, 3, 4, 5];
const allPositive = numbers4.every(num => num > 0);
console.log(allPositive); // Output: true

console.log("------");

//check if any number is negative
const numbers5 = [1, -2, 3, 4, 5];
const hasNegative = numbers5.some(num => num < 0);
console.log(hasNegative); // Output: true

console.log("------");

//find the even number
const numbers6 = [1, 3, 7, 8, 10];
const firstEven = numbers6.find(num => num % 2 === 0);
console.log(firstEven); // Output: 8

console.log("------");
//find the index of element
const animals = ['dog', 'cat', 'horse', 'cat'];
const index = animals.indexOf('cat');
console.log(index); // Output: 1

console.log("------");

//find the last index of element
const animals2 = ['dog', 'cat', 'horse', 'cat'];
const lastIndex = animals2.lastIndexOf('cat');
console.log(lastIndex); // Output: 3

console.log("------");
//sort the array
const numbers7 = [40, 1, 5, 200];
numbers7.sort((a, b) => a - b);
console.log(numbers7); // Output: [1, 5, 40, 200]




