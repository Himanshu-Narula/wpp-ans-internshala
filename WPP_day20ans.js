// Question 20: Write a JavaScript program to reverse the order of bits in an integer. 
//              14 -> 00001110 -> 01110000 -> 112
//              56 -> 00111000 -> 00011100 -> 28
//              234 -> 11101010 -> 01010111 -> 87
// Answer 20:

function reverseBits(num) {
    
    let binaryStr = num.toString(2);

    binaryStr = binaryStr.padStart(8, '0');

    let reversedBinaryStr = binaryStr.split('').reverse().join('');

    let reversedNum = parseInt(reversedBinaryStr, 2);

    return reversedNum;
}

// Example usage:
console.log(reverseBits(14));  // Output: 112
console.log(reverseBits(56));  // Output: 28
console.log(reverseBits(234)); // Output: 87