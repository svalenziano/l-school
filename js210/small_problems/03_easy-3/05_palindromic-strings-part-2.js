/*
P
  Return = true if palindrome, false if not
  Reqs
    - case insenstive
    - ignore non-alphanumeric chars
E
D
A
*/

// TESTS
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false


// MY SOLUTION
/* 
P
E
  Madam, I'm Adam
  madamimadam (whitespace and non-alpha-numerics are removed)
D
A
  - isAlphaNumeric HELPER:
    - input = character
    - outpout = boolean
    - use regex to test
  - lowercase the string
  - Remove whitespace, non-alphas
    - convert to array
    - use filter to filter by helper function
  - compare (new) string to reversed (new) string


*/
function isAlphaNumeric(character) {
  return /[a-zA-Z1-9]/.test(character)
}

function isRealPalindrome(string) {
  let characters = string.toLowerCase().replace(' ', '').split('')
  characters = characters.filter((x) => isAlphaNumeric(x))
  result = characters.join('') === characters.reverse().join('')
  console.log(result)
  return result
}
