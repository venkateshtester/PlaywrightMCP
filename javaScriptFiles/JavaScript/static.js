class Car {
  static wheels = 4; // Static variable

  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  static stop() { // Static method
    console.log('Car is stopped');
  }

  drive() { // Instance method
    console.log(this.name + ' is driving');
  }
}

const car1 = new Car('Honda', '2023', 5000000);
console.log(car1.name, car1.model, car1.price);     // Access instance fields
console.log(Car.wheels);                            // Access static variable
Car.stop();                                         // Call static method
car1.drive();                                       // Call instance method
