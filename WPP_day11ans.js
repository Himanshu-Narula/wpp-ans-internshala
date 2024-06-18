// Question 11: Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
//              Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
// Answer 11:

function checkIncreasingMode(a, b, c) {
    if (a < b && b < c) {
        return "Strict mode";
    } else if (b < c) {
        return "Soft mode";
    } else {
        return "Not increasing";
    }
}

// Test cases
console.log(checkIncreasingMode(10, 15, 31)); // Strict mode
console.log(checkIncreasingMode(24, 22, 31)); // Soft mode
console.log(checkIncreasingMode(22, 22, 31)); // Soft mode
console.log(checkIncreasingMode(5, 5, 5));    // Not increasing
console.log(checkIncreasingMode(7, 8, 9));    // Strict mode
console.log(checkIncreasingMode(9, 8, 7));    // Not increasing