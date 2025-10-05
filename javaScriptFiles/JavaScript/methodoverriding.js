class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  startEngine() {
    console.log('Starting engine for car');
  }
}

class Audi extends Car {
  startEngine() {
    console.log('Starting engine for Audi');
  }
  autoParking() {
    console.log('Audi auto parking');
  }
}

// Testing Method Overriding
const audi = new Audi('Audi', 'Q7');
audi.startEngine(); // Outputs: 'Starting engine for Audi'
audi.autoParking(); // Audi-specific method

const car = new Car('Toyota', 'Camry');
car.startEngine();  // Outputs: 'Starting engine for car'
