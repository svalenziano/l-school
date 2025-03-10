/* 
https://launchschool.com/lessons/28467827/assignments/3e9003a4
https://launchschool.com/exercises/ff1cee69

Spelling blocks:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Write a function that takes a string as an argument and returns true if the number can be spelled using the set of blocks, otherwise false.  Letters are case-insenstive.

Each block may only be used once.  If a letter from one side of the block is used, the paired letter may not be used.

*/


// LS tests
isBlockWord('BATCH');      // true
isBlockWord('jest');       // true
isBlockWord('BUTCH');      // false


/* 
P
========================================
QUESTIONS
  - non-string argument?
  - empty string?
  - trim whitespace from ends?
  - non-alpha chars?
  - in the provided 'spelling blocks', the colon is NOT one of the chars (it is a delimiter)?
  - 

E
========================================

D
========================================

['bo', 'xk', 'dq', 'cp', ...]

A
========================================
v1 high level
  - lowercase and trim the input string
  - CONSTANT = create array of strings.  Each string represents the two letters of the block
  - for each character, idx of the input string
    - 
    
  - return true

  inBlocks(character, blocksArray) {    (HELPER)
    - for each block in the array:
      - if character is found
        - mutate blocksArray (remove found element)
        - return true
    - return false
*/


// MY TESTS
console.log(isBlockWord('B') === true);
console.log(isBlockWord('O') === true);
console.log(isBlockWord('Z') === true);
console.log(isBlockWord('M') === true);
console.log(isBlockWord('BX') === true);
console.log(isBlockWord('BX ') === true);
console.log(isBlockWord('BXDCNgrfJHVLZ') === true);

// false
console.log(isBlockWord('1') === false);
console.log(isBlockWord('$') === false);
console.log(isBlockWord('BXDCNgrfJHVLZ3') === false);
console.log(isBlockWord('ZM') === false);
console.log(isBlockWord('BO') === false);
console.log(isBlockWord('BO') === false);
console.log(isBlockWord('') === false);
console.log(isBlockWord('    ') === false);


// version 2
function isBlockWord(str) {
  let blocks = [
    'bo', 'xk', 'dq', 'cp', 'na',
    'gt', 're', 'fs', 'jw', 'hu',
    'vi', 'ly', 'zm',
  ];
  str = str.toLowerCase().trim();
  // for each character
    // test if 
}

// VERSION 1
/* function isBlockWord(str) {
  let blocks = [
    'bo', 'xk', 'dq', 'cp', 'na',
    'gt', 're', 'fs', 'jw', 'hu',
    'vi', 'ly', 'zm',
  ];
  str = str.toLowerCase().trim();
  if (str.length === 0) {
    return false
  }
  // for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let found = false;
    // for each block
    for (let b = 0; b < blocks.length; b ++) {
      let block = blocks[b]
      if (block.includes(char)) {
        blocks.splice(b, 1);
        found = true;
      }
    }
    if (found === false) {
      return false;
    }
  }
  return true;
} */