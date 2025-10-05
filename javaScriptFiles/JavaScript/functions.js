//function declaration
function add(a, b) {
  return a + b;
}

function print(){
    console.log("hi this is js");
}

const sum = add(5,5);
console.log(sum);

print();

//Function expression
const multiply = function(a, b) {
  return a * b;
};

const multi = multiply(5,5);
console.log(multi);

//arrow function
const divide = (t1,t2) => t1/t2;
const div = divide(5,5);
console.log(div);