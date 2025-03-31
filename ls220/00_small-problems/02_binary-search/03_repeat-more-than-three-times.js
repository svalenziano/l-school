
        
        
        
/*
P
//////////////////////////////////////////////////////
Given an array of integers (sorted ascending) and a target integer, return a boolean representing whether or not the target appears greater than 3 times in the array

LS EXAMPLES
    console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
    console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
    console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
    console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
    console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
    console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

    // All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- count = 0
- Binary search for the target, return index
- if the target is found:
  - set 'anchor' to index
  - while element at pointer === target: (HELPER?)
    - increment count
    - decrement index
  - return to anchor
    - while element at pointer === target:
    - increment count
    - increment index
  - return count >= 4

HELPER
searchForValueInDirection(value, direction) => count of value
  // returns count of value in the direction, inclusive of current index

*/

// LS TESTS



