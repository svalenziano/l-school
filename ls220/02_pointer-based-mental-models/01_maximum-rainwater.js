
        
        
        
/*
P
//////////////////////////////////////////////////////
// Imagine a series of vertical barriers arranged in a straight
// line at equal distances across a flat field.
// These barriers have different heights. After a rainstorm,
// water collects between the barriers, forming reservoirs.
// Your task is to determine the maximum volume of rainwater
// that can be captured between any two barriers, without
// the water spilling over the tops of those two barriers.

// Write a function `maxRainwater` that takes an array of
// barrier `heights` and calculates the maximum volume
// of rainwater that can be harvested between any two barriers.

// The array `heights` represents the height of each barrier,
// where `heights[i]` is the height of the i-th barrier.
// The distance between each barrier is uniform.

// The input array will contain at least 2 values.

// Example:
// Input: [1, 2, 1]
// Output: 2
// Explanation: The distance between the first and
// third barrier is 2, and the height is 1, so
// the maximum amount of rainfall is 2 * 1 = 2

//   |    =>    |
// |_|_|      |*|*|

// Example:
// Input: [2, 3, 4, 2]
// Output: 6
// Explanation: The distance between the first and
// fourth barrier is 3, and the height is 2, so the
// maximum amount of rainfall is 3 * 2 = 6

//     |            |
//   | |    =>    | |
// | | | |      |*|*|*|
// |_|_|_|      |*|*|*|


console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);

// All test cases should log true



My rules
- RETURN = maximum amount that can be harvested from between ANY TWO adjacend OR non-adjacent barriers
- you are NOT determining the total volume that can be stored between all barriers
- the volume that can be stored between two barriers is constrained by the lesser of the heights

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1
  - max volume - this tracks the max vol as you move from left to right
  - use anchor and runner
    - generate all combos of two barriers (BRUTE FORCE)
    - determine volume for the barriers, update `max` as appropriate
  - the 

v2 - after looking at the hint - "YOU CAN USE START-END POINTER STRATEGY"
  - start w pointers at start and end of array
  - while start is to the left of right:
    - determine volume and update `max` as appropriate
    - move the pointer that's on the longer of the two
    - if both pointers are on equal heights, move start
    - if left pointer 

*/

// LS TESTS

// console.log(maxRainwater([1, 1]) === 1);
// console.log(maxRainwater([1, 3]) === 1);
// console.log(maxRainwater([1, 2, 1]) === 2);
// console.log(maxRainwater([2, 3, 4, 2]) === 6);
// console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
// console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
// console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
// console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
// console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);


// MY TESTS
console.log(maxRainwater([1, 2, 3, 4, 5]) === 6);
console.log(maxRainwater([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49)



// LS solution
function maxRainwater(heights) {
  let result = 0;
  let start = 0;
  let end = heights.length - 1;

  while (start < end) {
    let minHeight = Math.min(heights[start], heights[end]);
    let amountOfRainwater = (end - start) * minHeight;
    result = Math.max(result, amountOfRainwater);

    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }
  return result;
}