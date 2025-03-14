/*
P

Write a string that accepts a string and returns an object with the following prroperties:
  - percentage of chars that are lowercase letters
  - pct of chars that are uppercase letters
  - pct of chars that are neither 
E
D
A
*/

// TESTS
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// MY SOLUTION
/*
P

E
letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
    lower = bdf     ->  3  ->  3/8 = 0.375
    upper = ACE     ->  3  ->  3/8 = 0.375
    neither = ' +'  ->  2  ->  2/8 = 0.25
D
A
  - total = string length
  - uppercase = (count with regex) / total 
    - use match with 'g' flag to generate list of matches
  - lowercase = (count with regex) / total 
  - neither = (total - uppercase - lowercase) / total 
  - return object
      - use (9.9999).toFixed(2) and String() to create each value
*/

// function letterPercentages(str) {
//   let len = str.length;
//   let uppercase = safeLength(str.match(/[A-Z]/g)) / len;
//   let lowercase = safeLength(str.match(/[a-z]/g)) / len;
//   let neither = (1 - uppercase - lowercase);
//   return {
//     lowercase: format(lowercase * 100),
//     uppercase: format(uppercase * 100),
//     neither: format(neither * 100),
//   }
// }

function safeLength(arr) {
  if (Array.isArray(arr)) {
    return arr.length;
  } else {
    return 0;
  }
}

function format(number) {
  return String(number.toFixed(2))
}

// console.log('lowercase:', format(3/8 * 100))

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

