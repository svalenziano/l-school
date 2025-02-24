/*
P
  INPUT = floating point num
  OUTPUT = string representing the angle in degreees, mins, seconds
E
D
A
*/

// TESTS
const DEGREE = '\u00B0';  // this is the ° symbol
// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

// MY SOLUTION

/* 
30 = 30, 0
  0 = 0, 0

76 43 48
0.43 * 60 = 25.80
0.80 * 60 = 48

ALGO
- remove fractional part
- degrees, remainder = separate (helper)
- minutes, remainder = separate(remainder * 60) (helper)
- seconds, remainder = separate(remainder * 60) (helper)
- seconds = decimal * 60

- SEPARATE(number) (helper function)
  - return [truncated number, number - truncated number]
*/

function separate(number) {
  let wholeNum = Math.floor(number);
  let decimal = number - wholeNum;
  return [wholeNum, decimal]
}

function zeroPad(string, places) {
  string = String(string);
  while  (string.length < places) {
    string = '0' + string;
  }
  return string
  }
// console.log(zeroPad('1', 2))
// console.log(zeroPad('1', 3))
// console.log(zeroPad('hiiiii', 3))

function dms(decimalDegrees) {
  const MINS_PER_DEGREE = 60;
  const SECONDS_PER_MIN = 60;
  let degrees;
  let minutes;
  let remainder;
  let seconds;
  [degrees, remainder] = separate(decimalDegrees);
  [minutes, remainder] = separate(remainder * MINS_PER_DEGREE);
  [seconds, remainder] = separate(remainder * SECONDS_PER_MIN);
  result = degrees + '°' + zeroPad(minutes, 2) + "'" + zeroPad(seconds, 2) + '"'
  // console.log(result)
  return result
}

// garbage
function divmod(num, divisor) {
  if (divisor === 0) {
    return [num, 0]
  }
  return [Math.floor(num / divisor), num % divisor]
}
// console.log(divmod(100, 10));
// console.log(divmod(10, 4));
// console.log(divmod(30, 0))