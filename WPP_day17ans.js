// Question 17: Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
//              Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.
// Answer 17:

function charShift(str) {

    let characters = str.split("");

    for(let i = 0; i < characters.length; i++) {
        let n = characters[i].charCodeAt() - 'a'.charCodeAt();
        n = (n + 1) % 26;
        characters[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }

    return characters.join("");

}
  
// Example use case
console.log(charShift("axbycz"));
console.log(charShift("python"));
console.log(charShift("javuz"));