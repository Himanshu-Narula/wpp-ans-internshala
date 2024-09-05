// Question 32: Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details.
//              Create two instances of the 'Person' class and display their details.
// Answer 32:

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
  
    displayPersons() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}
  
// Creating instances of the Person class
const p1 = new Person('Himanshu Narula', 23, 'India');
const p2 = new Person('Thomas Shelby', 29, 'Great Britain');
  
// Displaying details of person1
console.log("\nPerson 1 Details:\n");
p1.displayPersons();
  
// Displaying details of person2
console.log("\nPerson 2 Details:\n");
p2.displayPersons();