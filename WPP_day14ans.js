// Question 14: Write a JavaScript program to extract the first half of an even string.
// Answer 14:

function extractFirstHalf(str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    } else {
        return "String length is not even.";
    }
}

// Example usecase:
let inputString = "HalfFull";
let firstHalf = extractFirstHalf(inputString);
console.log(firstHalf);  // Output: "Half"