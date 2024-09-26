// Question 38: Write a JavaScript program to compute the union of two arrays.
//              Sample Data :
//              console.log(union([1, 2, 3], [100, 2, 1, 10]));
//              [1, 2, 3, 10, 100]

// Answer 38:

function findUnionArray(arr1, arr2) {
    // Concatenate the two arrays
    let combinedArray = arr1.concat(arr2);

    // Use a Set to remove duplicates
    let unionArray = [...new Set(combinedArray)];

    return unionArray;
}

// Example usage:
console.log(findUnionArray([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 100, 10]