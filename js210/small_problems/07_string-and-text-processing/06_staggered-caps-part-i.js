/*
P
  non-alpha chars are not changed but should be counted regarding switching
E
D
A
*/

// TESTS
console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");


// MY SOLUTION
/* 
for each char
  if char is alphabetical:
    if index is even -> uppercase
    else lowercase
  else:
    return char
*/
function staggeredCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (/[a-z]/i.test(char)) {
      if (i % 2 === 0) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    } else {
      result += char;
    }
  }
  return result;
}
