/* 
INPUT = string = email address
OUTPUT = boolean (email is valid or not?)
REQUIREMENTS = 
    - Email consists of two parts separated by '@': 1) 'local part'  2) 'domain part'
    - There must be one and only one @ sign
    - Local part contains one mor eletters or digits.  Non-alphanumerics are disallowed
    - Domain part contains two or more components separated by single dot.  Each component
        is alphabetic, no numerals or other chars.
*/

// EXAMPLES

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false



/* 
MY SOLUTION

E
D
A
  - split string on '@'
    - if length is not 2, return false
  - validate local part: contains only /[A-Za-z0-9]/
    - return false if invalid
  - split `domain part` on dot
    - if length is less than 2, return false
  - validate ALL parts: contains only /[A-Za-z]/


*/

/* more debuggable? */
function isValidEmail(email) {
  let parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }
  let [localPart, domainPart] = [parts[0], parts[1]];
  if (/[^a-zA-Z0-9]/.test(localPart)) {  // contains non-alphanumerics?
    return false;
  }
  let domainParts = domainPart.split('.');
  if (domainParts.length < 2) {
    return false;
  }
  // do any domain parts contain non-alphabetic chars, incl. numerals?
  if (domainParts.some((x) => /[^a-zA-Z]/.test(x))) {
    return false;
  }
  // any zero-length domain parts?
  if (domainParts.some((x) => x.length === 0)) {
    return false;
  }
  return true
}


/* Trying again with a single regex */
// built the pattern with regexr, then pasted into this file
function isValidEmail(email) {
  return /^[a-zA-Z0-9]+@([a-zA-Z]+\.)+([a-zA-Z])+$/.test(email)
}