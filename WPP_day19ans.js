// Question 19: Write a JavaScript program to find the number appearing most frequently in a given array of integers.
// Answer 19:

function MostFrequentNumber(arr) {
    let frequency = {};
    
    arr.forEach(num => {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    });
    
    let mostFrequentNum;
    let maxFrequency = 0;
    
    Object.keys(frequency).forEach(key => {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
            mostFrequentNum = parseInt(key); // converting key to integer
        }
    });
    
    // Step 4: Return the most frequent number
    return mostFrequentNum;
}

// Example usage:
let arr = [10, 20, 30, 20, 20, 30, 10, 30, 20, 20, 20];
let mostFrequent = MostFrequentNumber(arr);
console.log("Most frequent number:", mostFrequent); // Output: Most frequent number: 20