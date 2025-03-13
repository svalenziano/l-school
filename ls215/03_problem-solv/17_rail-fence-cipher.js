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

// let x = encrypt("WE ARE DISCOVERED FLEE AT ONCE")
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

// HELPERS
// ============================================================================


function create2DArray(length, numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = Array(length).fill(' ')
  }
  return arr;
}

// Iterate over zig-zag array and invoke callback on each element of the zigzag
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

// Create 2D array and fill it with placeholder elements in zig-zag pattern
function createZigZagRails(length, numRows) {
  let arr = create2DArray(length, numRows);
  zigZagExecute(arr, (row, col) => arr[row][col] = '?')
  return arr.map((row) => row.join(''))
}


function replaceRailPlaceholders(array, replaceWith) {
  // inputs: 
  //    array of rows (strings)
  //    string of characters to use as replacement
  // side effect = mutate array of strings, '?' replaced with a character from `replaceWith`
  // return = none
  console.log(array)
  const PLACEHOLDER = '?'
  replaceWith = replaceWith.split('');
  for (let i = 0; i < array.length; i++) {
    while (array[i].includes(PLACEHOLDER)) {
      if (replaceWith.length > 0) {
        array[i] = array[i].replace('?', replaceWith.shift());
      } else {
        array[i] = array[i].replace('?', ' ');
      }
    }
  }
}

function squashRailsRows(railsArray) {
  // INPUT = array = populated fence rails with elements in zig-zag pattern
  // OUTPUT = string (row 1 chars + row 2 chars + ...)
  let result = '';
  let arrWidth = railsArray[0].length
  let arrHeight = railsArray.length
  // Create a template and use it to select characters from the input array
  let template = createZigZagRails(arrWidth, arrHeight);
  for (let rowIdx = 0; rowIdx < arrHeight; rowIdx++) {
    for (let colIdx = 0; colIdx < arrWidth; colIdx++) {
      if (template[rowIdx][colIdx] !== ' ') {
        result += railsArray[rowIdx][colIdx]
      }
    }
  }
  return result;
}


// MAIN FUNCTION
// ============================================================================
function decrypt(encryptedString, numRails) {
  let result = [];
  let rails = createZigZagRails(encryptedString.length, numRails);

  // populate the rails
  replaceRailPlaceholders(rails, encryptedString);

  // extract the decrypted string from the rails
  zigZagExecute(rails, (row, col) => result.push(rails[row][col]));
  return result.join('')
}

function encrypt(stringToEncrypt, numRails) {
  let chars = stringToEncrypt.split('')

  // create empty rails and populate them with chars from the string
  let arr = create2DArray(stringToEncrypt.length, numRails);
  zigZagExecute(arr, (row, col) => arr[row][col] = chars.shift());

  // create a string from the rails and return the result
  return squashRailsRows(arr)
}


// TESTS
// ============================================================================


let tests = [
  'WEAREDISCOVEREDFLEEATONCE',
  'WHATEVER YOU DO DON\'T LOOK UP',
  'RUUUUUUN',
  'THE QUICK BROWN FOX',
  'THE PASSWORD IS !@##@$%%^sgrea%',
]

for (let test of tests) {
  console.log();
  console.log(test, ':')
  let encrypted = encrypt(test, 3);
  console.log(encrypted);
  let success = test === decrypt(encrypted, 3)
  console.log(`Success? ${success}`);
}