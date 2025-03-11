/* 

PROBLEM:
Create two functions:
  1) Encode message into rail fence cipher
  2) Decode message from rail fence cipher

EXAMPLE
  Encrypted:
    WECRLTEERDSOEEFEAOCAIVDEN

    Displayed on 'rail fence'
    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .

    Each rail fence is compressed and then all fences are appended, one after the other:
    WECRLTE + ERDSOEEFEAOC + AIVDEN = WECRLTEERDSOEEFEAOCAIVDEN

  Decrypted:
    WE ARE DISCOVERED FLEE AT ONCE

*/





/* 
MY SOLUTION

P
=================================================
Encryption:
  INPUT = string, unencrypted
  OUTPUT = string, encrypted

Rail fence:
  RETURN = array of strings
  OUTPUT = log each encrypted line?

Decryption:
  INPUT = string, encrypted
  RETURN = decrypted string
  OUTPUT = none

RULES
  - Encryption
    - Letters are placed on rails: start on top rail, move downwards
    - If letter is on bottom rail, move upwards
    - Space between letters is filled with empty characters
  - Decryption
    - Letters are removed from rails, using same pattern as encryption



E
=================================================
*/

let x = encrypt("WE ARE DISCOVERED FLEE AT ONCE")
// console.log(x[0] = 'W   E   C   R   L   T   E')
// console.log(x[1] = ' E R D S O E E F E A O C ')
// console.log(x[2] = '  A   I   V   D   E   N  ')

// console.log(encrypt())
/*
W   E   C   R   L   T   E  -> Rail 0 -> first element at idx 0, skip 3
 E R D S O E E F E A O C   -> Rail 1 -> first element at idx 1, skip 1
  A   I   V   D   E   N    -> Rail 2 -> first element at idx 2, skip 3
    
ENCRYPTION
    SHIFT and append to 2d array FROM INPUT STRING IN ZIGZAG PATTERN
      Shift and append to rail 0 (use .replace method)
      Shift and append to rail 1
      Shift and append to rail 2
      Shift and append to rail 1
      Shift and append to rail 0
    ...
    Squash Rail 0 into string, append squashed rail 1, and then squashed rail 2
    Iterate through indexes from 0 to end
      If character is found
        Append to String
    Return string

DECRYPTION
WECRLTEERDSOEEFEAOCAIVDEN
    For each index of the string:
    Setup rails with appropriate number of placeholders
?   ?   ?   ?   ?
 ? ? ? ? ? ? ? ? 
  ?   ?   ?   ?  
    For each index of the encrypted string:
      Shift character from string and onto rail 0 (use replace to replace the first instance)
      When rail 0 fills up, continue with rail 1, and then rail 2
    Smoosh the rails back together


D
=================================================
Array of strings?
[W   E   C   R]
[ E R D S O E ]
[  A   I   V  ]

While building arrays:
  - Horizontal index = integer
  - Vertical index = integer
  - Direction = move up or down (boolean?)

A
=================================================
fillArray(value, horizIndex, vertIndex)  HELPER


HELPER
Building the zigzag arrays:
  INPUT = length integer, numRows
  OUTPUT = array of 3 strings
?   ?   ?   ?   ?
 ? ? ? ? ? ? ? ?
  ?   ?   ?   ?
V1
  - create array of arrays: 
      - one array for each row
      - every element = ' ' (string w one space)
      - length = length of string
  - moveDown = true;
  - rowIndex = 0;
  - lastRowIndex = numRows - 1
  - index = 0
  While index is less than length:
    - set '?' at [rowIndex][index]
    - if rowIndex = lastRowIndex && moveDown:
      - moveDown = false
    - else if rowIndex = 0 && !moveDown:
      - moveDown = true
    - if moveDown ? rowIndex += 1 : rowIndex -= 1;
    - index += 1
V2



*/

function create2DArray(length, numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = Array(length).fill(' ')
  }
  return arr;
}

function rowsToStrings(nestedArray) {
  // for each row, create string and append to array
  // map: joins the array into a string
}

/* 
For each index between 0 and (length - 1):
  execute callback, passing in the row, column, value (zigzag pattern)

*/
function zigZagExecute(array, callback) {
  const LAST_ROW_INDEX = array.length - 1;
  let rowLength = array[0].length
  let moveDown = true;
  let rowIndex = 0;
  let colIndex = 0;
  while (colIndex < rowLength) {
    callback(rowIndex, colIndex)
    if (rowIndex === LAST_ROW_INDEX && moveDown) {
      moveDown = false;
    } else if (rowIndex === 0 && !moveDown) {
      moveDown = true;
    }
    moveDown ? rowIndex += 1 : rowIndex -= 1;
    colIndex += 1;
  }
}

/* 
Callback:
   - rowidx, colidx -> mutate the arr
*/
function createZigZagRails(length, numRows) {
  let arr = create2DArray(length, numRows);
  zigZagExecute(arr, (row, col) => arr[row][col] = '?')
  return arr.map((row) => row.join(''))
}


function zigZagStrings(length, numRows) {
  const LAST_ROW_INDEX = numRows - 1;
  let arr = create2DArray(length, numRows);
  let moveDown = true;
  let rowIndex = 0;
  let colIndex = 0;
  while (colIndex < length) {
    arr[rowIndex][colIndex] = '?';
    if (rowIndex === LAST_ROW_INDEX && moveDown) {
      moveDown = false;
    } else if (rowIndex === 0 && !moveDown) {
      moveDown = true;
    }
    moveDown ? rowIndex += 1 : rowIndex -= 1;
    colIndex += 1;
  }
  return arr.map((row) => row.join(''))
}

// HELPER - get rows from ZigZag
/* 
INPUT = array = populated fence rails
OUTPUT = string
ALGO = 
  - create zigzag string with placeholders
  - for each row
    - for each index between 0 and the length of the row:
      - if character other than ' ' is found:
        - append the character from the input array onto the output string

*/

// for (let row of zigZagStrings2(25, 3)) {
//   console.log(row)
// }

/* 
Algo:
  - split `replaceWith` into array
  - for each row:
    - while currentRow contains '?'
      - if `replaceWith` length > 0:
        - REASSIGN STRING at `currentRow`: 
            replace first instance of '?' with char shifted from left side of `replaceWith`
      - else:
        - REASSIGN STRING:
            replace '?' with ' '
*/

function replaceRailPlaceholders(arrayOfStrings, replaceWith) {
  // input = 
  //    array of strings
  //    string of characters to use as replacement
  // side effect = mutate array of strings, '?' replaced with a character from `replaceWith`
  // return = none
  const PLACEHOLDER = '?'
  replaceWith = replaceWith.split('');
  for (let i = 0; i < arrayOfStrings.length; i++) {
    while (arrayOfStrings[i].includes(PLACEHOLDER)) {
      if (replaceWith.length > 0) {
        arrayOfStrings[i] = arrayOfStrings[i].replace('?', replaceWith.shift());
      } else {
        arrayOfStrings[i] = arrayOfStrings[i].replace('?', ' ');
      }
    }
  }
}
// console.log(zigZagStrings2(12, 3))
// let test = zigZagStrings2(12, 3);
// console.log(test)
// replaceQuestionMarks(test, '1234')
// console.log(test)


/* 

    For each index of the string:
    Setup rails with appropriate number of placeholders
?   ?   ?   ?   ?
 ? ? ? ? ? ? ? ? 
  ?   ?   ?   ?  
    - split string into encryptedChars
    - replace question marks: HELPER for each character in encryptedChars:
      - replace question marks with char, filling row 1 before proceeding to row 2
    - result = emptry string
    - Smoosh the rails back together using zigZagHelper
      - callback:
        - get value of character at rowIdx, colIdx, concatenate onto 'result'
    
*/
function decrypt(encryptedString, numRails) {
  let rails = createZigZagRails(encryptedString.length, numRails)
  replaceRailPlaceholders(rails, encryptedString)
  let result = [];
  zigZagExecute(rails, (row, col) => result.push(rails[row][col]))
  return result.join('')
}

// for (let rail of decrypt('WECRLTEERDSOEEFEAOCAIVDEN', 3)) {
//   console.log(rail)
// }
console.log(decrypt('WECRLTEERDSOEEFEAOCAIVDEN', 3))




/* 
    SHIFT and append to 2d array FROM INPUT STRING IN ZIGZAG PATTERN
      Shift and append to rail 0 (use .replace method)
      Shift and append to rail 1
      Shift and append to rail 2
      Shift and append to rail 1
      Shift and append to rail 0
    ...
    let characters = Find value at positions (HELPER) (get characters )

    Squash Rail 0 into string, append squashed rail 1, and then squashed rail 2
    Join strings into one large string
    Extract characters and join 
*/
function encrypt() {

}