// Question 12: Write a JavaScript program to reverse a given string.
// Answer 12:

function string_reverse(str) {
    return str.split("").reverse().join("");
}

// Test Cases
console.log(string_reverse("Python"));
console.log(string_reverse("C++"));
console.log(string_reverse("JavaScript"));
console.log(string_reverse("madam"));