// Question 29: Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
// Answer 29:

function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error('The provided value is not an integer.');
    }
    return true; // or any other logic you want to execute if the number is an integer
}

// Example usage:
try {
    checkInteger(4.5); // This will throw an error
} catch (error) {
    console.error(error.message); // Output: The provided value is not an integer.
}