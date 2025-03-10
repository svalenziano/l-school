"use strict";

/* 
P
=========================================

- INPUT = string which represents multiple numbers or ranges, always increasing in value
- RETURN = "list of complete numbers" -> array of integers


- Inidividual #s separated by comma
- Ranges are separated by '-' or ':'
  - The stop & start of the range are included in the range, eg 1-2 = [1, 2] or [11, 12]
  - The top-end of a range can also serve as the bottom-end of another range

Possible separators:
   ["-", ":", ".."]

LS Examples
  "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
  "1-3, 1-2" --> 1, 2, 3, 11, 12
  "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
  "104-2" --> 104, 105, ... 112
  "104-02" --> 104, 105, ... 202
  "545, 64:11" --> 545, 564, 565, .. 611



*/


/* 
P
=========================================
questions:  
  - ACTUAL SET OF POSSIBLE SEPARATORS
    - conflict btw '..' (text) vs '...' (examples) ?
  - empty string?
  - non-string argument?
  - no arguments


E
=========================================
Indiv. numbers
  "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21

Discrete Ranges
  "1-3, 1-2" --> 1, 2, 3, 11, 12

Ranges that share start & stop
  "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
  "104-2" --> 104, 105, ... 112
  "104-02" --> 104, 105, ... 202
  "545, 64:11" --> 545, 564, 565, .. 611




D
=========================================
???? 


A
=========================================

v5 high level
  - from left to right
    - currentNumber = first number
    - find nextSeparator and nextNumber (use regex):
      - if nextSeparator is a comma, determine next number using helper
        - append number onto result
        - update currentNumber
      - if nextSeparator is a rangeSeparator, create range using the next number
        - append range onto result
        - update currentNumber
v5 low level
  - create array of numbers and Separators (use regex matchAll)
  - currentNumber = shift element from array
  - while array length > 0:
    - nextSeparator = shift element from array
    - nextNumber = shift element from array
    - if nextSeparator is a comma:
      - currentNumber = get number with helper (currentNum, nextNum)
      - append currentNumber onto result
    - else if nextSeparator is a rangeSeparator, create range using the next number
      - rangeEnd = get number with helper (currentNum, nextNum)
      - create using currentNum and rangeEnd
      - append range onto result
      - update currentNumber to rangeEnd
    - else
      return 'invalid separator'
  - return result
*/

function rangeArray(low, high) {
  // Output: range, excludes low, includes high
  let result = [];
  for (let i = low + 1; i <= high; i++) {
    result.push(i);
  }
  return result;
}

function shortHand(str) {
  const rangeSeparators = [':', '..', '-'];
  let tokens = [...str.matchAll(/([0-9]+)|([,:-]|\.\.){1}/g)].map((x) => x[0])
  // console.log(tokens);
  let currentNum = Number.parseInt(tokens.shift());
  let result = [currentNum];
  while (tokens.length > 0) {
    let nextSeparator = tokens.shift();
    let nextNum = tokens.shift();
    // console.log(`cur = ${currentNum} => nextSep = ${nextSeparator} =>` nextNum = ${nextNumber}`)
    if (nextSeparator === ',') {
      currentNum = funnyIncrement(currentNum, nextNum);
      result.push(currentNum);
    } else if (rangeSeparators.includes(nextSeparator)) {
      let rangeEnd = funnyIncrement(currentNum, nextNum);
      result.push(...rangeArray(currentNum, rangeEnd));
      currentNum = rangeEnd;
    } else {
      return "Invalid separator";
    }
  }
  return result;
}

console.log(shortHand("1, 3, 7, 2, 4 , 1"))
console.log(shortHand("1-3, 1-2"))
// console.log(shortHand("1, 3, 7"))
// console.log(shortHand("9, 8, 7"))
// console.log(shortHand("1, 3:7"))
// console.log(shortHand("1, 3..7"))
// console.log(shortHand("1, 3-7"))
// console.log(shortHand("1:3:7"))
// console.log(shortHand("104-02"))
// console.log(shortHand("545, 64:11"))


function funnyIncrement(oldNum, newNum) {
  // input = 2 integers
  // output = new integer
  let sigDigits = String(newNum).length
  let insigDigits = String(oldNum).length - sigDigits;
  let oldInsig = String(oldNum).slice(0, insigDigits) || 0;
  let oldSig = String(oldNum).slice(-1 * sigDigits);
  let newSig = String(newNum)
  if (Number.parseInt(newSig) <= Number.parseInt(oldSig)) {
    oldInsig = String(Number.parseInt(oldInsig) + 1)
  }
  return Number.parseInt(oldInsig + newSig, 10);
}






// FOLLOW UP
/*  
- WHAT IS ^ OPERATOR?
*/