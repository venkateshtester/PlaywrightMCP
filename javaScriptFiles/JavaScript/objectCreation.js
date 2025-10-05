//using es6 class style
class Customer{
    constructor(name, product){
        this.name = name;
        this.product = product;
    }

    addToCart(){
        console.log(`${this.product} added to cart`);
    }


}

//instance of the class
const cust1 = new Customer("Venkat", "Apple macbook pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

console.log("-----")

//Using object literals
const user = {
  name: "Michael",
  age: 25,
  country: "USA",
  occupation: "Engineer"
};
console.log(user.name); // Output: Michael


