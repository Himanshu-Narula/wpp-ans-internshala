// Question 18: Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
// Answer 18:

function maxAdjacentDiff(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let maxDiff = Math.abs(arr[1] - arr[0]);

    for (let i = 1; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i + 1] - arr[i]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

// Example usage:
let arr = [3, 8, 10, 6, 12];
console.log("Maximum adjacent difference:", maxAdjacentDiff(arr)); // Output: 6