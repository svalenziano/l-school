/* 
PROBLEM:
https://launchschool.com/lessons/28467827/assignments/f8e4f50c

// LS TEST CASES
  function findClosestOpponent(positions, position) {
    // ...
  }

  console.log(findClosestOpponent({
    "Opponent 1" : 1,
    "Opponent 2" : 15,
    "Opponent 3" : 37
  }, 10)); // 15

  console.log(findClosestOpponent({
    "Opponent 1a" : 1,
    "Opponent 1b" : 5
  }, 3)); // 5

  console.log(findClosestOpponent({
    "Opponent 1a" : 1, "Opponent 1b" : 5,
    "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
  }, 150)); // 100
*/



/* 

P
=============================================
THE PROBLEM
 - Given an object and an integer, find the object value that is closest to the integer.
 - If two or more object values are equidistant from the integer, pick the largest value
 - 'closest' = subtract key value from integer.  Smallest number = closest

INPUT =
  1) Object. Keys are the names of the oponents.  Values are positive integers (positions)
  2) Integer: position of the active player (always positive)

RETURN = 
  Integer: Position of the closest opponent (always a positive integer)

RULES  
  - If equidistant, return the opponent with the 'higher position' (higher integer value)
  - positions of 'null' are disregarded
  - If object is empty, return null
  - any valid JS object may be provided as the object.  You must handle errors
  - at least one opponent will be active

QUESTIONS
  - 'Distance' is evaluated by subtracting opponent position from 'player' position?
  - Will position always be a positive integer?  How to handle, if not?
  - Will the opponent always be an object formatted per the provided examples?
  - Will there always be greater than 0 opponents?
  - Can/should input object be mutated?
  - What if more than two opponents are equidistant?
  - What if two or more opponents share the same position and are the 'closest opponent'?
      Does it matter which value I return?
  - Will positions always be integers or will they sometimes be decimals?
  - How is an 'active' opponent defined?



E
=============================================

*/
// LS TEST CASES

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

// MY TESTS
// no object provided
console.log(findClosestOpponent({}, 74)); // null

// valid but incompatible object
console.log(findClosestOpponent({
  "Atlas" : [1,2,3],
  "Luna" : 15,
  "" : 37
}, 10)); // raise TypeError

// compatible object
console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15





/*


D
=============================================


A
=============================================
v1 high level
  - myPosition
  - check for empty object: if length of Object.keys() is zero:
    - return null
  - create list of opponent positions (use Object.values)
  - filter out null
  - throw error if any values are non-integers (use .some())
  - sort values in ascending order: (use callback helper)
  - return 0th element

  sorting callback(intA, intB) (HELPER)
    - Sort integers ASCENDING by their distance (absolute value of the difference) from myPosition
    - If integers are equidistant, sort by DESCENDING integer value
    - DETAILS
      - distA = abs(myPosition - intA)
      - distB = abs(myPosition - intB)
      - if (distA < distB) 
        - return -1
      - else if (distA > distB)
        - return 1
      - else
        - return intB - intA (sort by descending integer value)

*/


function findClosestOpponent(opponentPositionsObject, myPosition) {
  "use strict";
  if (Object.keys(opponentPositionsObject).length === 0) {
    return null;
  }
  let positions = Object.values(opponentPositionsObject)
                        .filter((x) => x !== null);
  let invalidValues = positions.some((x) => !Number.isInteger(x))
  if (invalidValues) {
    return 'Invalid value provided!'
  }
  positions.sort((a, b) => {
    let distA = Math.abs(myPosition - a);
    let distB = Math.abs(myPosition - b);
    if (distA < distB) {  // sort ascending
      return -1
    } else if (distA > distB) {  // sort ascending
      return 1
    } else {
      return b - a; // sort descending
    }
  });
  return positions[0]
}