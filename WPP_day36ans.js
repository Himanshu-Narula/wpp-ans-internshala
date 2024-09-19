// Question 36: Write a JavaScript function to format a number up to specified decimal places.
//              Test Data :
//              console.log(decimals(2.100212, 2));
//              console.log(decimals(2.100212, 3));
//              console.log(decimals(2100, 2));
//              "2.10"
//              "2.100"
//              "2100.00"

// Answer 36:

function decimals(number, decimalPlaces) {
    return number.toFixed(decimalPlaces);
}

// Example usage:
console.log(decimals(2.100212, 2));  // Output: "2.10"
console.log(decimals(2.100212, 3));  // Output: "2.100"
console.log(decimals(2100, 2));      // Output: "2100.00"