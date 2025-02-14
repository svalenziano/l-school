/*
Return a substring 

Requirements
  - if either `start` or `end` are negative or NaN, treat them as zero
  - if either `start` or `end` are greater than string.length, set equal to string.length
  - both start and end are positive?
    - start is less than end?
      - both are within boundary of string?
        - return substring from start (inclusive) to end (not inclusive)
    - start is greater than end?
      - swap `start` and `end`, then proceed per above
    - start === end
      - return empty string
  - end `arg` is omitted (equals undefined), and start is positive and within boundary, return substring starting from `start` until end
*/


// Examples
function substring(string, start, end) {
  // …
}

let string = 'hello world';  // length = 11

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"


// My solution
/*
EXAMPLES

ALGO

return substring (HELPER)
- assumes valid slice indices
- use for loop to return substring

MAIN FUNCTION
- if start === end:
  - return ''
- if `start` or `end or negative or NaN
  - set them to zero
- if `start` or `end` are greater than string length
  - set equal to string length (don't subtract one)
- if `start` is not an integer, set it to zero
- if `end` is undefined, set equal to string length
- if both start and end are positive:
  - start is greater than end?
    - swap start and end
  - start is less than end?
    - RETURN_SUBSTRING
*/

function dumbSubstring(string, start, end) {
  let result = ''
  for (let i = start; i < end; i++) {
    result += string[i]
  }
  // console.log(result)
  return result
}

// dumbSubstring('hello', 0, 5);
// dumbSubstring('hello', 0, 4);
// dumbSubstring('hello', 0, 3);
// dumbSubstring('hello', 0, 2);
// dumbSubstring('hello', 0, 1);
// dumbSubstring('hello', 0, 0);
// dumbSubstring('hello', 0, -1);

function substring(string, start, end) {
  if (start === end) {
    return '';
  }

  if (start < 0 || Number.isNaN(start)) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }

  if (!Number.isInteger(start)) {
    start = 0;
  }

  if (end === undefined) {
    end = string.length
  }

  start = Math.min(start, string.length);
  end = Math.min(end, string.length);

  if (start > end) {
    // swap start and end
    let tempStart = start;
    start = end;
    end = tempStart;
  }

  let result = dumbSubstring(string, start, end);
  console.log(result);
  return result;
}

