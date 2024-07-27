// Question 21: Write a JavaScript program to remove all characters from a given string that appear more than once.
// Answer 21:

function removeDuplicates(str) {

    const chars = str.split('');
    const charCount = {};
    
    chars.forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });
    
    const result = chars.filter(char => charCount[char] === 1).join('');
    
    return result;

}

// Example usecase:
const inputString = "Hello, world!";
const resultString = removeDuplicates(inputString);
console.log(resultString);  // Output: "He, wrd!"