// Question 27: Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
// Answer 27:

function filterValues(arr, valuesToRemove) {
    return arr.filter(item => !valuesToRemove.includes(item));
}
  
// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const valuesToRemove = [3, 5, 7];
  
const filteredArr = filterValues(arr, valuesToRemove);
console.log(filteredArr);  // Output: [1, 2, 4, 6]