/* 
INPUT = integer (year)
OUTPUT = string describing the century
 */




// LS tests
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// my solve
/* 
- divide by 1000
- round up
- get last digit and add st, nd, rd, or th using match-case 
*/
function century(year) {
  let cent = String(Math.ceil(year / 100))
  let lastDigit = cent[cent.length - 1]
  switch (lastDigit) {
    case '1':
      cent = cent + 'st'
      break;
    case '2':
      cent = cent + 'nd'
      break;
    case '3':
      cent = cent + 'rd'
      break;
    default:
      cent = cent + 'th'
  }
  console.log(cent)
}