/*
P
  - Implement 'String.prototype.startsWith' method without using built-in string methods (other than bracket notation and .length property)
  - Inputs:
    - String to test
    - 'starts with' text (string)
  - Reqs
    - Empty string -> true
    - Longer string -> false
E
D
A
  Function params:  
    - `string` = does this string start with the `searchString`?
    - `searchString` = do ALL the chars of this string form the beginning of the other string?
  - For each index & character in the `searchString`
    - For a given index value, if the character in `searchString` DOESN'T match the char in `string`
      - return false
  - return true
*/

// TESTS
let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false


// MY SOLUTION
function startsWith(string, searchString) {
  for (let idx=0; idx < searchString.length; idx++) {
    if (searchString[idx] != string[idx]) {
      return false;
    }
  }
  return true;
}
