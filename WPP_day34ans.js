// Question 34: Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details.
//              Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
// Answer 34:

// Parent class Vehicle
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
}

// Subclass Car inheriting from Vehicle
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    // Override display method to include number of doors
    display() {
        console.log(`Car: ${this.year} ${this.make} ${this.model} - ${this.numDoors} doors`);
    }
}

// Usage example
let c1 = new Car('Toyota', 'Supra', 2010, 2);
c1.display(); // Output: Car: 2010 Toyota Supra - 2 doors