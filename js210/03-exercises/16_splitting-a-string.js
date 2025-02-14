/*
P
  Input
    1) string to be split
    2) delimiter
  Output:
    - Logged substrings: For each segment of the split string, print the segment on it's own line
    - "ERROR: No delimiter" if none is supplied
  Return:
    None
  Requirements:
    - Ignore trailing delimiters
    - Use leading delimiters (first element)
    - You can use bracket notation and the `length` property, but not the String() class or methods




E
D
A
  - if no delimiter, log error and return
  - if delimiter = '';
    - log each character using (for-of loop)
  - create an empty string called `current_string`
  - for each `idx` between 0 and `string.length - 1` (the idx of last character):
    - if the char is not === delimiter:
      - concatenate the char onto `current_string`
    - if the char is a delimiter
      - log `current_string`
      - reset `current_string` to ''
    - if you've reached the end of the string
      log the string
*/


// LS TESTS
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello


// MY SOLUTION
function splitString(string, delimiter) {
  console.log(`splitString(${string}, ${delimiter})`)
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }
  if (delimiter === '') {
    for (let char of string) {
      console.log(char);
    }
    return;
  }
  let current_string = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx]
    if (char !== delimiter) {
      current_string += char;
    } else {
      console.log(current_string);
      current_string = ''
    }
  }
  if (current_string !== '') {
    console.log(current_string);
  }
}