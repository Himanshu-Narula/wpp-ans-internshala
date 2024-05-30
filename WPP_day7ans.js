// Question 7: Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
// Answer 7:

function extendString(str) {
    if (str.length >= 3){
      let strToAdd = str.substring(str.length - 3);
      return strToAdd + str + strToAdd;
    } else {
      return false;
    }
}

console.log(extendString("abc"));

console.log(extendString("ab"));

console.log(extendString("Hi! How are you?")); 