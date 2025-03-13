/* 
P
================================================
Write a function called swap that takes a string as an argument and returns a string with the alphabetic chars swapped with the numeric chars.


LS examples
  console.log(swap("1a2b3c") === "a1b2c3"); // true
  console.log(swap("abcd123") === "123dabc"); // true



MY SOLUTION BELOW THIS LINE: -------------------------------------------------------

RULES 
- When a value is found, it is swapped with the first 'opposite type' value that's found
  - A new string is created and then re-processed
- Continue until no more values can be swapped

E
================================================
LOOKING CLOSER
1a2b3c beginning
a1b2c3 end

  sTEP BY STEP
  1a2b3c beginning
  a12b3c (1 swapped with a)
  a1b23c (2 swapped with b)
  a1b2c3 end (3 swapped with c)

abcd123 beginning
1bcda23 (a swapped with 1)
12cdab3 (b swapped with 2)
123dabc end (c swapped with 3)
no further swaps can be made (all remaining chars are alphabetic)

// My tests
*/
// happy path
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true
console.log(swap("1a2b3c") === "a1b2c3"); // true

// empty string
console.log(swap('') === '')

// uneven type of chars
console.log(swap('abcd1') === '1bcda')
console.log(swap('12a34') === 'a2134')
console.log(swap('1') === '1')
console.log(swap('a') === 'a')
console.log(swap('abcd') === 'abcd')

// non-alphanumeric chars are ignored
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true

/*

QUESTIONS
- empty string?
- are non-strings allowed?
- are non-alphanumeric chars allowed? Eg: '.!@#$%^<{}'
- more or less than 1 argument allowed?
- non-latin chars? eg Only [a-zA-Z10-9]
- If string is entirely alphabetic or entirely numeric, no swaps can be made?

D
================================================
STRINGS = REGEX TESTS

unprocessed = string of unprocessed characters
processed = string of processed characters (ordered correctly)

ARRAYS:
  easy SHIFTing off the array and pushing onto array
  use REGEX with custom function



A
================================================
V1
- for each index between 0 and thelength of the string:
  - if a character is alphabetic
    - find the next numeric character in the string
V2
- result = ''
- while unprocessed array still has elements:
  - `current` = get first character (mutate unprocessed)
    - if the character is alphabetic
      - `numeralFound` = extractChar (HELPER)
        - args:
          - list to mutate
          - pass regex for numeral
        - side effect: remove the numeral from the list
      - if numeralFound:
        - concat the numeral ONLY onto `result`
        - unshift `current` onto `unprocessed`
      - else return processed + unprocessed
    - else if the char is numeric:
      - same as above, except reversed
    - else (char is non-alphanumeric):
      - remove and concat the char onto result

STEP BY STEP
1a2b3c beginning  'abc' '123'
a1 2b3c           'bc'
a1b2 3c
a1b2c3 end 

abcd123 beginning                'abcd' '123'
1 bcd23 -> 1-b-cd23 -> 12 bcd3   '
12 bcd3 -> 12-b-cd3
123dabc end (c swapped with 3)

v3 (after looking at LS "Looking at abstractions" hint)
- `letters` = remove all letters from string
- `numerals` = remove all numerals from string
- split string into array
- for each element of the array:
  - if the element is alphabetic:
    - if `numerals.length` is greater than 0
      - replace the element with an element shifted off `numerals`
  - else if the element is numeric:
    - if `letters.lenth` is greater than 0
      - replace the element with an element shifted off `letters`
  - else (element is nonalphanumeric):
    - do nothing



v3
abcd123   'abcd' '123'
1 bcd123   'abcd' '23'
12 cd123   'abcd  '3'
123 d123   'abc'   ''
123d 123
*/


function swap(str) {
  let letters = str.match(/[a-z]/gi) ?? [];
  let numerals = str.match(/[0-9]/gi) ?? [];
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i]
    if (/[a-z]/i.test(char)) {
      if (numerals.length > 0) {
        chars[i] = numerals.shift();
      }
    } else if (/[0-9]/i.test(char)) {
      if (letters.length > 0) {
        chars[i] = letters.shift()
      }
    }
  }
  let result = chars.join('');
  return result
}