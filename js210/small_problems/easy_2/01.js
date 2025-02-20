/* 
PROBLEM: remove all duplicate characters

See examples
*/



// LS examples
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""




// my solve

/* 
P
E
D
A
  - result = '';
  - for each character in the string (starting with 2nd char):
    - if the character is NOT the same as the last character:
      - concatenate it onto the end of result
  - return result
 */
function crunch(string) {
  let result = string[0] || '';
  for (let idx = 1; idx < string.length; idx++) {
    if (string[idx] !== string[idx - 1]) {
      result += string[idx];
    }
  }
  console.log(result)
  return result
}