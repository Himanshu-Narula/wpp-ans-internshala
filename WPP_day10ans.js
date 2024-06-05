// Question 10: Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
// Answer 10:

function newString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        return str.substring(0, 3).toLowerCase() + str.substring(3);
    }
}

console.log(newString("HELLO"));
console.log(newString("Hi"));
console.log(newString("JavaScript"));
console.log(newString("xo"));