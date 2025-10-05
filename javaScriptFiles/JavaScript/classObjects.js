class Car {
    constructor(name, price, model, color) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }
    refuel() {
        console.log(`${this.name} car is refueled`);
    }
}
// Creating objects
const c1 = new Car("BMW", 100, "520d", "black");
const c2 = new Car("Honda", 20, "Civic", "white");

console.log(c1.name);
console.log(c1.price);

console.log("------");

console.log(c2.name);
console.log(c2.price);

console.log("------");

c1.refuel();