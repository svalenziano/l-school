/*
P
  INPUT = string
  OUTPUT = object 
              lowercase: count of lowercae chars
              uppercase: count 
              neither: non-alpha chars

  BONUS POINTS:
    Do it using the `String.prototype.match()` method
E
D
A
*/

// TESTS
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


// MY SOLUTION

function letterCaseCount(string) {
  let lowercase = string.split('').filter((x) => /[a-z]/.test(x)).length;
  let uppercase = string.split('').filter((x) => /[A-Z]/.test(x)).length;
  return {
    lowercase,
    uppercase, 
    neither: string.length - lowercase - uppercase,
  }
}
