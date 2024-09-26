// Question 37: Write a JavaScript function to check whether an input is an array or not.
//              Test Data :
//              console.log(is_array('w3resource'));
//              console.log(is_array([1, 2, 4, 0]));
//              false
//              True

// Answer 37:

function is_array(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
}

// Test Data
console.log(is_array('w3resource')); // Output: false
console.log(is_array([1, 2, 4, 0])); // Output: true