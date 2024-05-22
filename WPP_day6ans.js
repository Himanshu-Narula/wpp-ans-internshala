// Question 6: Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// Answer 6:

function isMultiple(num){
    if (num <= 0){
        return false; // The number should be positive
    }
    
    if (num % 3 === 0 || num % 7 === 0){
        return true;
    }
    else{
        return false;
    }
}

let number = 21;
if (isMultiple(number)) {
    console.log(`${number} is a multiple of 3 or 7.`);
} else {
    console.log(`${number} is NOT a multiple of 3 or 7.`);
}