/*



Problem 1
P
////////////////////////////////////////////
Given an array and an integer `k`, return the `k`-th distinct string present in the array
RULES
- if there are fewer than `k` distinct strings, return empty string
- string = earliest qualifying string (closest index to zero)
- distinct string = instances of identical string in array = 1 

QUESTIONS
  - if there's only on or two strings, return the first string in the array?
  - empty array = emptry string?
  - what if unexpected types are encountered?
    - args 1 and 2 are always provided?
    - arg1 isn't an array of 1-character strings?
    - arg2 isn't an integer
    - arg1 or 2 are undefined
  - what if arg2 is less than 1?
  - will strings aways be one character long?
  - what is the definition of distinct?
    - case sensitive?  'a' distinct from 'A' ?


E
////////////////////////////////////////////


D
////////////////////////////////////////////


A
////////////////////////////////////////////



PROBLEM 2
P
//////////////////////////////////////////////
INPUT = `nums` array of ints
RETURN = 'third largest num in `nums`'
OUTPUT = none
SIDE EFFECTS = none
RULES
  - You cannot sort the array

QUESTIONS
  - will the array always be sorted in descending numerical order?
  - will array always have at least 3 distinct values?  
      Are these allowed? [1, 2, 2] or [1, 1, 2]
  - element types:
    - will elements always be integers? numbers?
  - will there always be one argument?
  - will the argument always be an array?  If not, ...
  - Can I build a new, sorted array? using the .toSorted method or another non-mutating method? For-loop?

E
//////////////////////////////////////////////
thirdMax([1,2,3])
thirdMax([1])
thirdMax([1, 2])

D
//////////////////////////////////////////////


A
//////////////////////////////////////////////



PROBLEM 3
P
  INPUT
  RETURN
  OUTPUT
  SIDE EFFECT
  RULES
  QUESTIONS
    - Prime number: a number whose only factors are 1 and itself?
      - 2 IS INCLUDED AS A PRIME # ?
      - 1 is a prime num?
    - will negative numbers be included in the string?
    - Any limits on how large or small the nums can be?
    - Integers only?  How should something like `a3.7bc` be interpreted?  [3, 7] or [] ?
    - Always a non-empty string?
    - Always one argument?
    - No primes -> return [] ?
    - One prime -> return array of length one, eg [1]?
    - Are there any non-alphanumeric chars that should be considered?
      - '1_23'
      - '1.23'
      - '1,23'
      - '1-23'
      - others?
    


example:
primeNumberPrinter("a4bc2k13d"); // [2, 13]






*/