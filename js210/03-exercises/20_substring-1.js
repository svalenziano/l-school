/*
Write a function that returns the substring: `substr(string, start, length)`

If `start` is negative, treat it as `str.length + start`

*/

// tests

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""


// my solution

/*
P
  Reqs:
    - allow out-of-range `start` indexes
    - allow out of range `length` values
    - allow negative indexes
E
  substr("hello world", 8, 20);     // "rld"
    string.length = 11 
    tktktk
D
A
  - Normalize (helper)
    - add or subtract until number is within range
  - substr (main function)
    - normalize the start and length
    - generate the string
      - if length is less than zero, return empty string
      - else
        - use for loop to generate string
    - return string

*/
function substr(string, start, length) {
  if (length <= 0) {
    return '';
  }
  let normalizedEnd = Math.min(string.length - 1, start + length)
  let normalizedStart = normalize(start, string.length, start + length);
  result = '';
  for (let i = normalizedStart; i < normalizedEnd; i++) {
    result += string[i];
  }
  console.log(result)
  return result
}

function normalize(start, end, numToNormalize) {
  /*
  This function adds or subtracts by 'the diff btw start and end' until the numToNormalize is normalized
  (0, 2, 3) -> 2 (truncate)
  (0, 2, -1) -> 1 (normalize)
  */
  let length = end - start + 1;
  let normalized = numToNormalize;
  // if longer, truncate
  if (numToNormalize > end) {
    normalized = end;
  // if negative, normalize
  } else if (normalized < start) {
    do {
      normalized += length;
    } while (normalized < start)
  }
  // console.log(normalized);
  return normalized;
}

// normalize(0, 2, 0) // 0
// normalize(0, 2, 1) // 1
// normalize(0, 2, 2) // 2

// normalize(0, 2, -1) // 2
// normalize(0, 2, -2) // 1
// normalize(0, 2, -3) // 0

// normalize(0, 2, 3) // 2
// normalize(0, 2, 99) // 2
