/*
Write a function that returns a string converted to lowercase
The code points of lowercase letters are 32 higher than those of the corresponding uppercase character.

Might be helpful:
'A'.charCodeAt(0) -> 65  ('A'.codePointAt works the same way)
String.fromCharCode(65 + 32) -> 'a'
*/


// TESTS
toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"


// My solution
/*
P
  - 
E
D
A
  - lowercase = ''
  - for each character
    - transform to lowercase
    - append to `lowercase`
  - return `lowercase`
*/

function toLowerCase(string) {
  let lowercase = ''
  const CODE_POINT_A = 65;
  const CODE_POINT_Z = 90;
  const CODE_POINT_SHIFT = 32; // add 32 to transform uppercase to lowercase
  string.split('').forEach(function(char) {
    let code = char.charCodeAt(0)
    if (code >= CODE_POINT_A && code <= CODE_POINT_Z) {
      code += CODE_POINT_SHIFT; // make lowercase
    }
    lowercase += String.fromCharCode(code)
  })
  console.log(lowercase)
  return lowercase
}
