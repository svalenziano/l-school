/*
P
  input = string
  output = array of 'leading substrings' (see examples below)
E
D
A
*/

// TESTS
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// MY SOLUTION
/* 
- split the string into an array
  - map each element of the array to a slice of the array (using the index)
- return the new array

*/

function leadingSubstrings(string) {
  return string.split('')
            .map((_, idx, arr) => arr.slice(0, idx + 1))
            .map((arrayOfLetters) => arrayOfLetters.join(''))
}


/* 
What about a solution using reduce?
- split string into an array of characters
  - for each index of the array:
    - reduce to a string (input = end index, output = slice from original string)
    - append to result
*/

function leadingSubstrings2(string) {
  let result = [];
  let chars = string.split('');
  chars.forEach((_, idx) => result.push(string.substring(0, idx + 1)));
  return result;
}

console.log("v2")
console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings2('a'));        // ["a"]
console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
