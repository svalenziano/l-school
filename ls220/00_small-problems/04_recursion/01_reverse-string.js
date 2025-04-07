
        
        
        
/*
P
//////////////////////////////////////////////////////
INPUT = STRING
RETURN = reversed string
Rules:
  - Use recursion to solve the problem

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:

hello
  o     last character (base case)
  ol    reversed string = last char + last char of rest of string (2nd to last char)
  oll   last char + 2nd to last char + 3rd to last char
  olle
  olleh

*/

/*


D
//////////////////////////////////////////////////////
List of chars
Pop the last char off and append to string

A
//////////////////////////////////////////////////////
var = remaining string
base case = empty string?
recursive def:
  A reversed string is the "last character of the string" concatenated with "the last character of the rest of the string (a slice of the current string)"

Launch School's recursive def:
  Take the first character of str and append it to the reverse of the remainder of str.

Algo v1
  - pointer = dillineates 'the rest of the string'

  - if string is '', return ''
  - if list of chars only has one char, return last character, ex: 'z'
  - result = ''
  - return result + recursive call(minus the last char (slice))

Algo v2, without mutation
  - 
*/

// LS TESTS
console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");



// my solve
function reverseString(str) {
  if (str === '') return '';
  let restOfString = str.slice(0, str.length - 1)
  return str.slice(-1) + reverseString(restOfString);
}


// ls solve
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}