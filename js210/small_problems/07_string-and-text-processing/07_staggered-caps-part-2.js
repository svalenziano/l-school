/*
P
  Same as 06 except non-alpha chars are not counted with regard to if the case
    should be alternated.
E
D
A
*/

// TESTS
console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");


// MY SOLUTION
/* 
Algo
  - let `capitalize` = true
  - for each index
    - if char is alpha
      - append character onto `result`, capitalized as appropriate
      - swap value of `capitalize
    - else
      - append char, without transformation
*/
function isAlpha(character) {
    return /[a-z]/i.test(character);
}

function staggeredCase(string) {
  let capitalize = true;
  let result = '';
  for (let i = 0 ; i< string.length; i++) {
    let char = string[i];
    if (isAlpha(char)) {
      result += (capitalize ? char.toUpperCase() : char.toLowerCase())
      capitalize = !capitalize;
    } else {
      result += char
    }
  }
  return result;
}
