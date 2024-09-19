// Question 35: Write a JavaScript function to convert a binary number to a decimal number.
//              Test Data :
//              console.log(bin_to_dec('110011'));
//              console.log(bin_to_dec('100'));
//              51
//              4
// Answer 35:

function binaryToDecimal(binary){
    let decimal = 0;
    // Iterate over each bit of the binary number
    for (let i = 0; i < binary.length; i++) {
        // Multiply the current decimal value by 2 and add the current bit
        decimal = decimal * 2 + parseInt(binary[i]);
    }
    return decimal;
}

// Example usage:
console.log(`Binary number 110011 is equivalent to decimal number ${binaryToDecimal("110011")}`);
console.log(`Binary number 100 is equivalent to decimal number ${binaryToDecimal("100")}`);