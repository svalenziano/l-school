/* 
P
========================================
INPUT = user-entered phone numbers
RETURN = ?? cleaned up phone numbers?
  - If bad number, return string of ten zeros `0000000000`
REQUIREMENTS
  - ignore spaces, dashes, dots, parentheses

RULES
  - less than 10 digits = bad number
  - 10 digits? => good!
  - if 11 digits 
    - and first is 1, use the last 10 digits
    - firt num is NOT 1, then it's a bad number
  - more than 11 digits = bad number 

QUESTIONS
  - input always a single string argument?  What about:
    - non strings?
    - no argument?
    - more than one arg?
    - 
  - Digits = 0 thru 9?
  - String will always only ontain only one phone number? 
   




*/


/* 

My solution
E
========================================


D
========================================



A
========================================
If length of string is 10:
  - Use regex to test for non-digits.  If number is all digits:
    - return the string
- if length of string is 11:
  - if all digits and starts with 1:
    - return the slice of the last 10 digits (use .slice(-10))
Return '00000...'

*/


// Tests
// 10 digits
console.log(cleanPhoneNum('0123456789')  === '0123456789');
console.log(cleanPhoneNum('1112223333')  === '1112223333');

// 11 digits good
console.log(cleanPhoneNum('12345678999') === '2345678999');
console.log(cleanPhoneNum('12223334444') === '2223334444');

// 11 digits bad
console.log(cleanPhoneNum('02345678999') === '0000000000');
console.log(cleanPhoneNum('01234567899') === '0000000000');

// invalid number of digits
console.log(cleanPhoneNum('112345678999') === '0000000000');
console.log(cleanPhoneNum('112345678') === '0000000000');

// non-digits
console.log(cleanPhoneNum('111a223333')  === '0000000000');
console.log(cleanPhoneNum('1234567a999') === '0000000000');


function cleanPhoneNum(str) {
  const allDigits = (x) => /[^0-9]/.test(x) === false;
  if (str.length === 10 && allDigits(str)) {
    return str;
  } else if (str.length === 11
             && str[0] === '1'
             && allDigits(str)) {
    return str.slice(-10);
  }
  return '0000000000';
}