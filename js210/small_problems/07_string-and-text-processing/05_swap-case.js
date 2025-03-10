/*
P
  INPUT = string
  OUTPUT = string. case swapped
E
D
A
*/

// TESTS
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


// MY SOLUTION
function isUppercase(string) {
  return /[a-z]/.test(string) === false;
}

function isLowercase(string) {
  return /[A-Z]/.test(string) === false;
}

function swapChar(character) {
  if (isLowercase(character)) {
    return character.toUpperCase();
  } else if (isUppercase(character)) {
    return character.toLowerCase();
  } else {
    return character
  }
}

function swapCase(string) {
  return Array.from(string.split(''), (char) => swapChar(char)).join('')
}
