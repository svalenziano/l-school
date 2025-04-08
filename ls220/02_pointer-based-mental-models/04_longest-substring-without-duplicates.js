
        
        
        
/*
P
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


MY RULES
  - reset the counter as soon as the string contains more than one of the same character (doesn't have to be contiguous with previous ocurrence)

E
//////////////////////////////////////////////////////

console.log(longestSubstringLength("helloworld") === 5);
                                        ^    ^
console.log(longestSubstringLength("dvdf") === 3);
                                     ^ ^
  dvdf
  ^      set = {e}, maxLength = 1
  dvdf
  ^^     set = {e, v}, maxLength = 2
  dvdf
  ^ ^     set = {d}, maxLength = 2 (no change)
    

My examples & tests:
*/
console.log(longestSubstringLength("abcabcbb") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
POINTER RULES
  - start anchor and runner at 0
  - move anchor? when a duplicate is found, move anchor to meet runner
  - move runner? every iteration
  - anchor features? none
  - runner features? update counter & maxLength
  - stop iteration? runner is beyond end of string

- s = 0, e = 0, max = 0
- chars = new Set() 
- while runner is within bounds of string:
  - add char at `e` to `chars` set
  - update max btw `ma` and `maxLength (e - s + 1)`
  - increment e
  - if duplicate (char at `e` is in Set):
    - s = e  (THIS WAS MY PROBLEM!!!)
    - clear `chars` set and add char at `e`
    
- return maxLength

containsDuplicate() (HELPER)
*/

function longestSubstringLength(str) {
  // console.log(str)
  let a = 0, r = 0, max = 0;  // a = anchor, r = runner
  let chars = new Set();
  while (r < str.length) {
    chars.add(str[r]);
    max = Math.max(max, chars.size);
    // console.log(chars.keys())
    // console.log(str.slice(s, e + 1), chars)
    r++;
    /* 
    THIS IS THE PROBLEM - I NEED TO RETURN BOTH S AND E TO THE CHARACTER AFTER THE FIRST INSTANCE OF THE DUPLICATED CHARACTER!!! */
    if (chars.has(str[r])) {
      a = str.indexOf(str[r], a) + 1;  // O(n) time complexity 😬
      r = a;
      chars.clear();
      // chars.add(...str.slice(s, e + 1));
    }
  }
  // console.log('returning', max)
  return max;
}




// LS TESTS
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

// console.log(longestSubstringLength("abc"))



// LS Solution
// function longestSubstringLength(string) {
//   let charMap = new Map();
//   let result = 0;
//   let a = 0;

//   for (let r = 0; r < string.length; r++) {
//     let char = string[r];
//     if (charMap.has(char) && charMap.get(char) >= a) {
//       a = charMap.get(char) + 1;
//     }
//     const currLen = r - a + 1;
//     result = Math.max(result, currLen);
//     charMap.set(char, r);
//   }
//   return result;
// }

