"use strict";

// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true


/* 
MY SOLVE
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

BRUTE FORCE
/////////////////////////////////////////////////////////////////



POINTER METHOD
/////////////////////////////////////////////////////////////////
Input = string
Output= string, with consonants reversed


EXAMPLES
  
  TRY 1: DIDN'T WORK!
    THIS FIRST ONE IS GOOD
    console.log(reverseConsonants("HELLO") === "LELHO");
      HELLO
      ^ ^
      LEHLO
        ^^
      LELHO

    BUT NOT THIS ONE!
    console.log(reverseConsonants("leetcode") === "deectole");
      leetcode
      ^  ^
      teelcode
        ^^
      teeclode
          ^ ^
      teecdole
  
  TRY 2: WORKS!  Start from beginning & end, move towards middle:
    console.log(reverseConsonants("HELLO") === "LELHO");
      HELLO
      ^  ^
      LELHO
        ^      
    console.log(reverseConsonants("leetcode") === "deectole");
      leetcode
      ^     ^
      deetcole
         ^^
      deectole

ALGO
  Start & End Pointers
    - When should I move the start pointer?
      - If it's not a consonant, or if a swap happens
    - When should I move the end pointer?
      - If it's not a consonant, or if a swap happens
    - What should the start pointer do other than move?
      - Swap the element that the end pointer
    - What should the end pointer do other than move?
      - Swap the element at the start pointer
    - Under what condition do we stop iteration?
      - As soon as the start pointer has a higher index than the end pointer

  - if length is less than 2:
    - return str (no modifications needed)
  - init index variables:
    - start = 0
    - end = length - 1
  - while start < end:
    - Begin with pointers at beginning and end
    - if start doesn't point ot consonant:
      - increment the start
    - if end doesn't point to consonant:
      - decrement the end
    - If both pointers point to consonants
      - Swap the elements
      - increment / decrement both pointers
  - return str

*/

function isConsonant(char) {
  // input = one-letter string
  return 'bcdfghjklmnpqrstvwxyz'.includes(char.toLowerCase());
}

function reverseConsonants(str) {
  if (str.length < 2) {
    return str;
  }
  // create variables for start and end indexes
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (!isConsonant(str[start])) {
      start += 1;
    }
    if (!isConsonant(str[end])) {
      end -= 1;
    }
    if (start < end && isConsonant(str[start]) && isConsonant(str[end])) {
      str = (
        str.slice(0, start) + 
        str[end] + 
        str.slice(start + 1, end) + 
        str[start] + 
        str.slice(end + 1));
      start += 1;
      end -= 1;
      // console.log(str)
    }
  }
  return str
}