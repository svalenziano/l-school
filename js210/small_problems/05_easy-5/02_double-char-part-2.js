/*
P
  Input = string
  Output = string.  Every consonant in orig. string is duplicated (doubled)
    Don't double anything else, incl vowels, digits, punctuation, whitespace
E
D
A
*/

// TESTS
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


// MY SOLUTION

function doubleConsonants(stringToDouble) {
  const CONSONANTS = /[bcdfghjklmnpqrstvwxyz]/i;
  let chars = stringToDouble.split('');
  let doubleConsonantsArray = chars.map(function(char) {
    if (CONSONANTS.test(char)) {
      return char + char;
    } else {
      return char
    }
  });
  return doubleConsonantsArray.join('')
}

