//add elements
const langs = ["Java", "Python", "JavaScript"];
const newLen = langs.push("Ruby", "HTML");
console.log(newLen);        // 5
console.log(langs);         // ["Java","Python","JavaScript","Ruby","HTML"]

console.log("-----");

//eliminates last element
const nums = [1,2,3,4,5];
const last = nums.pop();
console.log(last);          // 5
console.log(nums);          // [1,2,3,4]

console.log("-----");
//removes and returns first element
const fruits = ["apple","banana","orange"];
const first = fruits.shift();
console.log(first);         // "apple"
console.log(fruits);        // ["banana","orange"]

console.log("-----");
///unshift – Add to the start
let arr = [1, 2, 3];
arr.unshift(0); // [0, 1, 2, 3]
console.log(arr);

console.log("-----");
//splice – Add/remove at any position
let arr1 = [1, 2, 3, 4];
arr1.splice(2, 1, 99); // arr: [1, 2, 99, 4]
console.log(arr1);

console.log("-----");
//slice – Copy a portion
let arr3 = [1, 2, 3, 4];
let sliced = arr.slice(1, 3); // sliced: [2, 3]
console.log(arr3);

console.log("-----");
//concat – Combine arrays
let arr4 = [1, 2];
let arr5 = [3, 4];
let arr6 = arr4.concat(arr5); // [1, 2, 3, 4]

console.log("-----");
//indexOf – Find a value’s position
let arr7 = [1, 2, 3, 2];
let idx = arr7.indexOf(2); // idx: 1
console.log(idx)

console.log("-----");
//includes – Check if value exists
let arr8 = [1, 2, 3];
let hasTwo = arr8.includes(2); // true
console.log(hasTwo);

console.log("-----");
let colors = ['blue', 'red', 'green', 'violet', 'red', 'yellow'];
let firstRedIndex = colors.indexOf('red'); // 1
let secondRedIndex = colors.indexOf('red', firstRedIndex+1);

console.log('First red:', firstRedIndex); 
console.log('Second red:', secondRedIndex);


console.log("-----");
const arr9 = ['apple', 'banana', 'mango'];
console.log(arr9.includes('banana'));     // true
console.log(arr9.includes('banana', 2));  // false
console.log(arr9.includes('pear'));       // false

console.log("-----");
const nums2 = [10, 20, 30];
nums2.forEach((value, index, array) => {
  console.log(index, value);
});
// Output:
// 0 10
// 1 20
// 2 30


