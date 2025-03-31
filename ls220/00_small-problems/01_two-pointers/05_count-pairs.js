
        
        
        
/*
P
//////////////////////////////////////////////////////
Given an array of integers (sorted ascending), and an integer `target`, count the number of pairs in the array whose sum is greater than `target`

Rules:
  - Duplicate pairs shouldn't be counted, ex: (1, 2) and (2, 1) are both greater than 2, but the second pair is invalid, since it's a duplicate of (1, 2)
  - Implicit: 
    - The array contains no duplicate values, ex: 2 won't be repeated

LS Examples
  console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
  // Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

  console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
  // Pair: (4, 5)

  console.log(countPairs([1, 3, 5, 7], 6) === 4);
  // Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

  console.log(countPairs([1, 2, 3, 4], 5) === 2);
  // Pairs: (2, 4), (3, 4)

  console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
  // No pairs

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*

D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
([1, 2, 3, 4, 5], 6) -> 4
  [1, 2, 3, 4, 5]  9, push pair!
            ^  ^
  [1, 2, 3, 4, 5]  8 push pair!
         ^     ^

  [1, 2, 3, 4, 5]  7 (less than 8... continue)
      ^        ^

  [1, 2, 3, 4, 5]  8, push pair!
         ^  ^
  [1, 2, 3, 4, 5]  6, continue...
      ^     ^         

  [1, 2, 3, 4, 5]  5, (arr[a] + arr[a - 1] is <= target) => no more possible pairs
      ^  ^                ... return!

POINTER PLANNING
  - a start? last idx
  - r start? last idx minus 1
  - a increment? move left when all combos are exhausted
  - r increment? 
      - move left with every iteration
      - reset to right if less than zero or sum is <= than target
  - a and r func: create pairs and push to array
  - end? 
      - a is out of range (< 0)
      - no more possible pairs (arr[a] + arr[a - 1] is <= target)

ALGO
  - pairs = []
  - a = length - 1
  - r = a - 1
  - while a >= 1 (need room for the runner to 'fit' to the left of the anchor)
        and there are possible pairs remaining (arr[a] + arr[a - 1] is > target):
    - if sum of pair <= target or r < 0
      - a-- (decrement anchor)
      - r = a - 1 (reset runner)
      - continue;
    - push pair to pairs
    - r--
  - return length of pairs
*/

function countPairs(arr, target) {
  let pairs = [];
  let a = arr.length - 1;
  let r = a - 1;

  let pairsRemaining = () => arr[a] + arr[a - 1] > target;
  let noMoreSumsThatExceedTarget = () => arr[a] + arr[r] <= target

  while (a >= 1 && pairsRemaining()) {
    if (noMoreSumsThatExceedTarget() || r < 0) {
      a -= 1;
      r = a - 1;
      continue;
    }
    pairs.push([arr[r], arr[a]]);
    r -= 1;
  }
  return pairs.length;
}


// LS solution
function countPairs(nums, target) {
  let count = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] > target) {
      count += end - start;
      end--;
    } else {
      start++;
    }
  }

  return count;
}

// SV: UNDERSTANDING THE LS SOLUTION
/*  
[1, 2, 3, 4, 5], TARGET = 6.  Solution = 4;

[1, 2, 3, 4, 5]  -> 👎 sum is not greater than target /// increment start
 ^           ^
[1, 2, 3, 4, 5]  -> 👍 7 is greater than target /// count += end - start  /// decrement end
    ^        ^
[1, 2, 3, 4, 5]  -> 👎 sum is not greater than target /// increment start
    ^     ^
[1, 2, 3, 4, 5]  -> 👍 7 is greater than target /// count += 1  /// decrement end
       ^  ^
[1, 2, 3, 4, 5]  -> anchor is no longer greater than runner, exit loop & return count!
       ^

This solution takes advantage of a couple of simple ideas: 
  1) if you pick the largest number, and the sum of it and the smallest number isn't larger than the `target`, then the smallest number can safely be disregarded, since it clearly WON'T be larger than the target when combined with any of the other numbers (all of which are smaller than the largest number, by definition)
  2) once you establish that all remaining numbers, when combined with the current large number, will also exceed the total!  There's no need to iterate through them all!
*/


// LS TESTS

console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs

