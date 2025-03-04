/*
P
   INPUT = string
   OUTPUT = palindromic substrings
      - Sorted in order of appearance in input string
      - Include duplicates
      - Case sensitive
      - Length >= 2 (single chars are not palindromes)
E
D
A
*/

// TESTS
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// MY SOLUTION
/* 
V1 HIGH LEVEL
  - substrings = array of all substrings
  - FILTER -> keep only palindromes 

  - Helper functions
    - is palindrome
    - all substrings

v1 low level
  - SUBSTRINGS (HELPER)
    - create empty array
    - for each start idx btw 0 and length minus 1
      - for each end idx btw start idx + 1 and length 
        - append substring onto array
    - return array

  - IS PALINDROME (HELPER)
    - split into array
    - reverse
    - join back into string
    - compare against original string

*/      

function palindromes(string) {
  return substrings(string).filter((str) => isPalindrome(str));
}

function isPalindrome(string) {
  return (string.length > 1) && (string === string.split('').reverse().join(''))
}

function substrings(string) {
  let result = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      result.push(string.substring(startIdx, endIdx));
    }
  }
  return result;
}

// console.log(substrings('hello'))