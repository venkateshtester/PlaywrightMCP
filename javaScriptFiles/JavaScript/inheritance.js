//grandparent class
class Automobile{
    constructor(chasisNumber){
        this.chasisNumber= chasisNumber;
    }

    useAeroDynamic(){
        console.log("Automobile -- aerodynamic");
    }
}


//parent class
class Vechile extends Automobile{
    constructor(make, model, year){
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;
        //this.fuelType = fuelType;
    }
    
    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`
    }

    startEngine(){
        console.log("Starting the engine..");
    }

    stopEngine(){
        console.log("stopping the engine.....");
    }

}


//child (sub class)

class Car extends Vechile{
    constructor(make, model, year, fuelType){
        super(make,model,year); //calling parent class constructor
        this.fuelType = fuelType;
    }

    driveCar(){
        console.log("Driving the car "+ this.model + " "+ this.fuelType);
    }


}

// child (sub class)
class Truck extends Vechile{
    constructor(make, model, year, loadingCapacity){
        super(make, model, year); //callling parent class constructor
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log("Driving the truck "+ this.model + " capacity " + this.loadingCapacity);
    }
}

//creating the objects (instances) using new keyword
const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2025, 100);

car.startEngine();
console.log(car.getInfo());
console.log("----");
car.driveCar();
console.log("----");
car.useAeroDynamic();
console.log("----");
console.log(car.chasisNumber);
console.log("----");
truck.startEngine();
console.log("----");
truck.driverTruck();
console.log("----");
console.log(truck.getInfo());
