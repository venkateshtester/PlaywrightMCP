//find unique values in array
const arr = [1, 2, 3, 2, 3, 4, 2, 5, 2];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

//convert int to string
const num = 32;
const str1 = num + '';
const str2 = String(num);
console.log(str1, typeof str1); // '32' 'string'
console.log(str2, typeof str2); // '32' 'string'

// Method 1: Using parseInt()
const str = "42";
const num1 = parseInt(str);
console.log(num1, typeof num1); // 42 'number'

// Method 2: Using Number()
const num2 = Number(str);
console.log(num2, typeof num2); // 42 'number'

// Method 3: Using unary plus operator (+)
const num3 = +str;
console.log(num3, typeof num3); // 42 'number'

//convert float to int
const floatVal = 3.76;
const intVal = parseInt(floatVal);
console.log(intVal); // 3


//check if var is a num
const value = 56;
if (typeof value === 'number' && !isNaN(value)) {
  console.log(value + ' is a number');
} else {
  console.log(value + ' is not a number');
}

//check array contains a value
const languages = ['Java', 'JavaScript', 'Python', 'Ruby'];
if (languages.includes('JavaScript')) {
  console.log('value found');
}

//check if array is empty
const arr2 = [];
if (arr2.length === 0) {
  console.log('Array is empty');
}


//iterate values in array
const testArr = [0, 1, 2, 3, 4, 5, 6, 7];
testArr.length = 3;
console.log(testArr); // [0, 1, 2]

//Get Last Array Value Without Length
const popArr = [0, 1, 2, 3, 4, 5, 6, 7];
const last = popArr.slice(-1);
console.log(last); // [7]
