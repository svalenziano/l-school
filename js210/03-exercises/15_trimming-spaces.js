/*
P
  - inPUT  = string
  - output = string with leading and trailing spaces removed
  - requirements = 
    - can use [ ] (bracket notation) and .length property, but can't use built-in String class
E
D
  - 
A
  - v1
    - Find first non-space character
      - 
    - Find last non-space character
    - return the string slice
  
  - v2
  - first_char = null
  - last_char = null
  - FIND FIRST NON-SPACE CHAR
    - For each character in the string (for-in loop)
      - If char is not a ' '
        - first_char = index
        - break
  - FIND LAST NON-SPACE CHAR
    - For each char in the string (for loop, starting at end of string)
      - If char is not a ' '
        - last_char = index
        - break
  - build and return slice of string
*/

function findFirstAndLast(string, char) {
  // ' abc ' -> [1, 3]
  // '   '   -> null
  // '   '   -> [null, null]
  let first = null;
  let last = null;
  for (let idx = 0; idx < string.length; idx ++) {
    if (string[idx] !== char) {
      first = idx;
      break;
    }
  }
  if (first !== null) {
    lastIndex = string.length - 1
    for (let idx = lastIndex; idx >= 0; idx--) {
      if (string[idx] !== char) {
        last = idx;
        break;
      }
    }
  }
  if (first !== null) {
    // console.log([first, last]);
    return [first, last];
  }
  return null;
}

findFirstAndLast('a', ' ')

// findFirst('asdf')

function trim(stringToTrim) {
  let firstAndLast = findFirstAndLast(stringToTrim, ' ');
  let result = '';
  if (firstAndLast) {
    result = stringToTrim.slice(firstAndLast[0], firstAndLast[1] + 1)
  }
  console.log(result)
  return result
}


// tests
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""