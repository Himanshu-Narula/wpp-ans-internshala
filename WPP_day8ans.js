// Question 8: Write a JavaScript program to check whether a string starts with 'Java'  if it does not then  return False.
// Answer 8:

function strWithJava(str) {
    if (str.length < 4) {
      return false;
    }

    if (str.substring(0, 4) == 'Java') {
      return true;
    } else {
      return false;
    }
}

console.log(strWithJava("JavaChoco"));

console.log(strWithJava("Java"));

console.log(strWithJava("Javnot"));