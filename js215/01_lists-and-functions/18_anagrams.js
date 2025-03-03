"use strict";
/* 
INPUT = word & array of words
RETURN = array of words.  
  - Every word in the array should be an anagram of the word argument
- Anagram = word 1 is an anagram of word 2 if they both contain the same words



*/





function anagram(word, list) {
  // ...
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]



/* 
MY SOLUTION
  - anagram helper (HELPER)
    - INPUT = word1, word2
    - return = true or false
    - if lengths are not equal:
      - return false
    - chars1 = characters of word1 split into array and then sorted
    - chars2 = ditto for word2
    - for each character in chars1:
      - if chars are not equal:
        -return false
    - return true

  MAIN FUNCTION
  - FILTER the original list: only include words that are anagrams of the input word
  - return filtered list

*/

function isAnagram(word1, word2) {
  if (word1.length !== word2.length)  {
    return false;
  }
  let chars1 = word1.split('').sort();
  let chars2 = word2.split('').sort();
  for (let i = 0; i < chars1.length; i += 1) {
    if (chars1[i] !== chars2[i])  {
      return false;
    }
  }
  return true;
}

function anagram(word, arrayOfWords) {
  return arrayOfWords.filter((word2) => isAnagram(word, word2));
}