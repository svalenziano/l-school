
        
        
        
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

"Hello World"   start anchor at 0, start runner at (nextSpace - 1).  Append runner value to array.
 ^   ^
"Hello World"   "ol"  decrement runner
 ^  ^
"Hello World"    "oll"  decrement runner
 ^ ^
"Hello World"    "olle"  decrement runner
 ^^
"Hello World"    "olleH"  decrement runner.  anchor and runner are at same index, 
 ^                   move anchor to (nextSpace + 1)
                     move runner to (nextSpace(nextSpace(a))) - 1
"Hello World"    "olleH d"  decrement runner.  anchor and runner are at same index.
       ^   ^
...

"Hello World"     runner is behind anchor.  END OF EXECUTION, return string!
             ^^

HELPER
nextSpace(string, start) = index of next space or end of the string (length of string)
  - x = search for next space, starting at `start`, or use length of string
  - return x
*/

// console.log(reverseWords("hi") === "ih");

function nextSpace(string, start=0) {
  const indexOfNextSpace =  string.indexOf(' ', start);
  return indexOfNextSpace === -1 ? string.length : indexOfNextSpace
}

// console.log(nextSpace("Hello World") === 5)
// console.log(nextSpace("Hello World", 6) === 11)

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
// function reverseWord(str) {
//   let result = []
//   let chars = str.split('');
//   for (let char of chars) {
//     result.unshift(char);
//   }
//   return result.join('');
// }

// function reverseWords(str) {
//   let words = str.split(' ');
//   let result = [];
//   for (let word of words) {
//     result.push(reverseWord(word))
//   }
//   return result.join(' ')
// }

// O(n) Algo
/* 
v1
  Use anchor and runner pointers
    - Where a start? 0
    - Where r start? end of the first word (use str.proto.search(character))
    - When a increment? When a === r
    - When r increment? When a === r
    - What does a do, other than increment?  Nothing
    - What does r do? Writes values to result array
    - end condition? runner is left of anchor

  Algo:
    - a = 0
    - r = nextSpace - 1
    - result = ''
    - word = ''
    - while a <= r
      - push char at r to word
      - decrement runner
      - if a === r:
        - move anchor to (nextSpace + 1)
        - move runner to (nextSpace(nextSpace(a))) - 1
        - push word to result
    - return result
    

HELPER, SEE ABOVE

v2 - ABANDONED
  result = ''
  Iterate thru the string
  If starting a word:
    - create a new array
    - unshift each character onto the front of the array
  If a space is encountered
    - join the word and append onto result
*/

function reverseWords(str) {
  let anchor = 0;
  let runner = nextSpace(str) - 1;
  let result = [];
  let word = [];
  while (anchor <= runner) {
    word.push(str[runner]);
    runner -= 1;
    if (anchor === runner) {
      result.push(word.join('') + str[runner]);
      // Move anchor to the character after the next space
      anchor = nextSpace(str, anchor + 1) + 1
      // Move runner to the character BEFORE the next NEXT space (two spaces away)
      runner = nextSpace(str, nextSpace(str, anchor + 1)) - 1
      word = [];
    }
  }
  return result.join(' ');
}

// console.log(reverseWords("Hello World"))

// LS TESTS
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

