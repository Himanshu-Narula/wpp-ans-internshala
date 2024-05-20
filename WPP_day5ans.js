// Question 5: Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
// Answer 5:

function removeCharacter(str, posi) {
    // Ensure the position is within the bounds of the string
    if (posi < 0 || posi >= str.length) {
      return "Invalid position";
    }
  
    // Remove the character at the specified position
    const modifiedString = str.slice(0, posi) + str.slice(posi + 1);
  
    return modifiedString;
  }
  
  // Example:
  const originalString = "Hello, World!";
  const positionToRemove = 7;
  const resultString = removeCharacter(originalString, positionToRemove);
  
  console.log("Original String:", originalString);
  console.log("Modified String:", resultString);
  