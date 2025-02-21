// MY CONSTANTS
const MILS_PER_MIN = 60000;
const MINS_PER_HR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HR;
const DATE_PART = '1/1/2000';

/*
P
E
  BEFORE MIDNIGHT

D
A
*/

// TESTS
console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686


// MY SOLUTION

/* 
- Benchmark date = midnight
- Get date object of input time:
  - Append arbitrary date
  - Create a date object using the string 
- Get milliseconds of input date and compare to comparison date

Before midnight = input 
*/

// LS SOLUTION

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);

  return (currentDateTime.getTime() - midnight.getTime()) / MILS_PER_MIN;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINS_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINS_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
