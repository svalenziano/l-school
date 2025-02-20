/* 
SAME AS 01.js except, solve with regex
*/

// LS examples
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');   


/* 
P
E
D
A
  - Regex:
    - use capture group to capture each group of letters, 
      replacing it with a single letter
    -
 */

function crunch(string) {
  let pattern = /(.)(\1+)/g;  // capture a character and then backreference it
  string = string.replace(pattern, "$1")
  console.log(string)
  return string
}