//////////////////////////////////////////////////////
// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

function longestSubstringLength(string) {
  // implementation goes here
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);

/* 
use set to track letters


IDEA:
- Form a 'window' with `l` and `r` pointers, starting with window size of 1.  Use a MAP to keep track of chars that have already been seen, and their indices.  If char at `r` has already been seen, move `l` to just after the first instance of the char at `r`. Return the `maxSize` of the window.

ALGO with Map:
- l = 0
- maxSize = 1
- seen = new Map()
- for every `r` between 0 and length - 1:
  - if char at `i` is in `seen`:
    - from `seen`, get index value for char at `r`, then add 1 (seen.get(str[r]) + 1)
    - move `l` to that index, removing entries in `seen` as you go
    - add `seen` entry for str[r]
  - else:
    - update maxSize, if appropriate (r - l + 1)
    - update `seen`
- return maxSize

ALGO with Set:
- l = 0
- maxSize = 1
- seen = new Set()
- for every `r` between 0 and length - 1:
  - if char at `i` is in `seen`:
    - move `l` until char at `l` is same as char at `r` (pointing at the previous instance of `r` char), then move one more, removing entries in `seen` as you go
    - add `seen` entry for str[r]
  - else:
    - update maxSize, if appropriate (r - l + 1)
    - update `seen`
- return maxSize


*/

function longestSubstringLength(str) {
  let l = 0;
  let maxSize = 0;
  let seen = new Set();
  for (let r = 0; r < str.length; r++) {
    if (seen.has(str[r])) {
      while (str[l] !== str[r]) {
        seen.delete(str[l])
        l++;
      }
      l++;
    } else {
      maxSize = Math.max(maxSize, r - l + 1);
    }
    seen.add(str[r]);
  }
  return maxSize;
}