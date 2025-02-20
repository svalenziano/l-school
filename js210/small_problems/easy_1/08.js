/*
Leap year:
  - every year that is divisible by 4, unless it's also divisible by 100
  - if year is divisible by 100, then not leap year, unless also divisible by 400

- Valid for any year that's greater than 0

- Return true or false

NEW REQUIREMENTS:
  - prior to 1752, reqs are much simpler: if divisible by 4, it's a leap year
*/

//tests 
// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

// My solution
/*
P
E
D
A
  IF divisible by 4
    if divisible by 100
      if divisible by 400
        return true
      return false
    return true 
*/

function isLeapYear(year) {
  if (year >= 1752) {
    let gregorianLeapyear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    return gregorianLeapyear(year)
  } else {
    return year % 4 === 0;
  }
}