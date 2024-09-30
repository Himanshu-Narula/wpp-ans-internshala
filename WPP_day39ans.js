// Question 38: Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
//              Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//              Expected result : [15, -22, 47]

// Answer 38:

function removeFalsyValues(arr) {
    return arr.filter(value => Boolean(value));
}

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result = removeFalsyValues(sampleArray);

console.log(result); // Output: [15, -22, 47]