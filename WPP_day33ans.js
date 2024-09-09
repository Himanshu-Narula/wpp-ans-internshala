// Question 33: Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter.
//              Create an instance of the 'Rectangle' class and calculate its area and perimeter.
// Answer 33:

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    area(){
        console.log(`Area of the rectangle is = ${this.width * this.height}`);
    }

    perimeter(){
        console.log(`Perimeter of the rectangle is = ${2 * (this.width + this.height)}`);
    }
}

let r1 = new Rectangle(10,8);
r1.area();
r1.perimeter();