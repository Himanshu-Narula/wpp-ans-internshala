// Question 16: Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
// Answer 16:

function swap(arr) {
    if (arr.length >= 1) {
        let temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    return arr;
}

// Example usage:
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 8, 10, 12, 14];

console.log("Original array 1:", array1);
console.log("Swapped array 1:", swap(array1));

console.log("Original array 2:", array2);
console.log("Swapped array 2:", swap(array2));