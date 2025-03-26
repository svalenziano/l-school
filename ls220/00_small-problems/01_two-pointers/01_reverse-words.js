
        
        
        
/*
P
//////////////////////////////////////////////////////
Reverse characters in each word using `pop` and `push` without the help of `Array.prototype.reverse`

Rules:
  - preserve case
  - preserve spaces between words

Questions
  - more than one space allowed between words?

E
//////////////////////////////////////////////////////
My examples & tests:
*/
console.log(reverseWords("hi") === "ih");

/*


D
//////////////////////////////////////////////////////
Array - used as a queue


A - BRUTE FORCE
//////////////////////////////////////////////////////
- split sentence into array of words using `split`
- for each word:
  - mutate the array = REVERSE WORD
- return sentence

reverseWord HELPER
  - result = []  space: O(n)
  - split word into array of chars   time and space O(n)
  - for each char:   O(n)
    - pop off letter and push onto result  time
  - return result, joined into string  O(1)


BRUTE FORCE CODE
*/
function reverseWord(str) {
  let result = []
  let chars = str.split('');
  for (let char of chars) {
    result.unshift(char);
  }
  return result.join('');
}

function reverseWords(str) {
  let words = str.split(' ');
  let result = [];
  for (let word of words) {
    result.push(reverseWord(word))
  }
  return result.join(' ')
}

// O(n) Algo
/* 
Use anchor and runner pointers



  - start = 0
  - end = length
  - 
*/



// LS TESTS
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

