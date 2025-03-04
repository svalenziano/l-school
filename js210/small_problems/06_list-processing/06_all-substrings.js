"use strict";
/*
P
  input = string
  output = all substrings (in the following order)
E
D
A
*/

// TESTS
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


// MY SOLUTION
/*
- result = []
- Map -> list of 'ending substrings' [abcde, bcde, cde, de, e]
- forEach -> append leading substrings (helper func) onto result

*/

function substrings(string) {
  let result = [];
  let endingSubstrings = string.split('')
      .map((_, idx) => string.substring(idx, string.length))
  endingSubstrings.forEach((endingSubstr) => {
    result.push(...leadingSubstrings(endingSubstr));
    }
  )
  return result;
}

function leadingSubstrings(string) {
  return string.split('')
            .map((_, idx, arr) => arr.slice(0, idx + 1))
            .map((arrayOfLetters) => arrayOfLetters.join(''))
}

