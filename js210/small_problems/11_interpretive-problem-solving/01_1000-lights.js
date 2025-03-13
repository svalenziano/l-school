/*
https://launchschool.com/exercises/e9aa7157?track=javascript
P
  Where n is the input:
    - The function should create a bank of `n` light switches and conduct `n` rounds of switch toggling on those switches
    - For each round between 1 and `n`, certain switches should be toggled
      - Which switches are toggled? The switches that are a multiple of `n`
        - Ex:
          - On the first round, every switch will be toggled, since every integer is a multiple of 1
          - On the second round, every other switch will be toggled (2, 4, 6, 8) since those numbers are multiples of 2
          - On the third round, every third switch will be toggled (3, 6, 9, ...) since those numbers are multiples of 3
    - At the end of `n` rounds, return an array of integers that represents the indices of the switches that are on.
E
D
A
*/

// LS TESTS

// lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// MY SOLUTION

/* 
EXAMINING THE LS EXAMPLES
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on  (TOGGLE MULTIPLES OF 2)
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on      (TOGGLE MULTIPLES OF 3)
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on  (TOGGLE MULTIPLES OF 4)
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on      (TOGGLE MULTIPLES OF 5)

P
====================================================================
Where n is the input:
    - The function should create a bank of `n` light switches and conduct `n` rounds of switch toggling on those switches
    - For each round between 1 and `n`, certain switches should be toggled
      - Which switches are toggled? The switches that are a multiple of `n`
        - Ex:
          - On the first round, every switch will be toggled, since every integer is a multiple of 1
          - On the second round, every other switch will be toggled (2, 4, 6, 8) since those numbers are multiples of 2
          - On the third round, every third switch will be toggled (3, 6, 9, ...) since those numbers are multiples of 3
    - At the end of `n` rounds, return an array of integers that represents the indices of the switches that are on.
E
====================================================================
*/

// console.log(lightsOn(1))  // 1
listsAreIdentical(lightsOn(1), [1])
listsAreIdentical(lightsOn(2), [1])
listsAreIdentical(lightsOn(3), [1])
listsAreIdentical(lightsOn(4), [1, 4])
listsAreIdentical(lightsOn(5), [1, 4])
listsAreIdentical(lightsOn(100), [1, 4, 9, 16, 25, 36, 49, 64, 81, 100])

/*
D
====================================================================
array of booleans

A
====================================================================
HIGH LEVEL
- Create list of booleans that's `n` long
- for each round between 1 and `n`
  - MAP: if index + 1 is multiple of round, toggle the value
- return REDUCED value: an array that contains indexes of `true` values

LOW LVEL
- Create list of booleans that's `n` long (use .fill)
- for each round between 1 and `n`
  - MAP: if index + 1 is multiple of round, toggle the value
- return REDUCED value: an array that contains indexes of `true` values
  - CALLBACK: if true return accum + index + 1, else accum

*/

function listsAreIdentical(lst1, lst2) {
  console.log(JSON.stringify(lst1) === JSON.stringify(lst2));
}

function lightsOn(numSwitches) {
  let switches = Array(numSwitches).fill(true);
  for (let round = 2; round <= numSwitches; round++) {
    switches = switches.map((val, idx, arr) => {
      let switchNo = idx + 1;
      if (switchNo % round === 0) {
        return !val
      } else {
        return val
      }
    });
  }
  // console.log(switches)
  // build array of lights that are on
  let on = [];
  for (let idx = 0; idx < switches.length; idx ++) {
    let switchNo = idx + 1;
    if (switches[idx] === true) {
      on.push(switchNo)
    }
  }
  return on;
}
