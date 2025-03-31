
        
        
        
/*
P
//////////////////////////////////////////////////////
This problem is a bit like a game of 21.  Given an array and an integer called `target`, find the maxium sum (of two distinct elements from the array) that is less than the target.

Input = array of ints, and target integer
Return = 
  - max value of arr[i] + arr[j] where i != j and value < `target`
  - return -1 (if no value exists that satisfies the above criteria)



E
//////////////////////////////////////////////////////

My examples & tests:




*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1 High level
  - maxSum = -1
  - for each combination of numbers (this is the only hard part)
  - if the sum is less than targer and greater than maxSum, update maxSum
  - if maxSum is one less than target, return the value immediately
  - return maxSum

approaches to the hard part?
  - anchor & runner
  - if array is sorted, would be best to start at end?  Not really, have no way of knowing how values in array relate to target

v2 high level
([5, 8, 3, 2, 1], 6)

  Sort the array O(n):
  [1, 2, 3, 5, 8]

  [1, 2, 3, 5, 8]  Find the first value that's at least two smaller than the target value
         ^         If the value doesn't exist, return -1
  [1, 2, 3, 5, 8]  Move runner left until a valid sum is found, and update sum
      ^  ^
  [1, 2, 3, 5, 8]  Move anchor left, process ...
      ^

([8, 2, 4, 9, 5, 10, 1, 7], 16)

  [1, 2, 4, 5, 7, 8, 9, 10]  
            ^           ^

([7, 4, 15, 11, 21, 9], 24)

  [4, 7, 9, 11, 15, 21]  No matching values for 21
                     ^
  [4, 7, 9, 11, 15, 21]  22!
      ^          ^

MY EXAMPLE
([4, 7, 9, 11, 12, 15, 21], 24)

  [4, 7, 9, 11, 12, 15, 21]  22!  
      ^              ^
  [4, 7, 9, 11, 12, 15, 21]  23!  Stop iterating when max value moves further away from target?
            ^   ^

v3 start-end pointer
([4, 7, 9, 11, 12, 15, 21], 24)

[4, 7, 9, 11, 12, 15, 21]   25
 ^                     ^

[4, 7, 9, 11, 12, 15, 21]   19
 ^                 ^
[4, 7, 9, 11, 12, 15, 21]   22  The number can go up even after it's gone down!
    ^              ^         
[4, 7, 9, 11, 12, 15, 21]   19
    ^          ^

v3 algo
  - s = 0
  - e = length - 1
  - sum = -1
  - incrementStart = true;
  - while s < e
    - if arr[e] > target:
      - decrement e
      - continue
    - newSum = s + e
    - if sum is one less than target, return immediately!
    - sum = newSum < target and greater than sum? newSum : sum
    - if incrementStart:
      - start += 1
    - else
      - e -= 1
    - invert incrementStart
  - return sum

  FAIL!  MY LOGIC FOR DETERMINING WHICH POINTER TO MOVE AND WHEN WAS FAULTY 

v4 example
[1, 2, 3, 4, 5], t = 10

  [1, 2, 3, 4, 5]   Find largest end pointer that's at least two smaller than target
   ^           ^
  [1, 2, 3, 4, 5]   Increment start pointer until sum exceeds (target - 1) or s > e
      ^        ^
                    Move runner left and repeat

[2, 3, 4, 5], t = 9
  - With r at 5, max is 8

        
*/

function twoSumLessThanTarget(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  let incrementStart = true;
  let sum = -1;

  while (s < e) {
    if (arr[e] > target - 2) {
      e -= 1;
      console.log('decremented e to', e)
      continue;
    }
    
    let newSum = arr[s] + arr[e];
    if (newSum === target - 1) return newSum;
    
    sum = (newSum < target && newSum > sum) ? newSum : sum;
    console.log('sum', sum)
    // console.log('s', s, 'e', e)
    if (incrementStart) {
      s += 1;
    } else {
      e -= 1;
    }
    incrementStart = !incrementStart;
  }
  console.log(sum)
  return sum;
}

function printPointer(index) {
  console.log(' '.repeat(index - 1) + '^')
}




// LS TESTS
// console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
// console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
// console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
// console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true


// LS Solution
// SV pseudocode
/* 
    while start pointer idx > end pointer idx
      if current sum is less than target
        if current sum is greater than maxSum
          update maxSum
        increment start pointer
      else
        decrement end pointer

*/
function twoSumLessThanTarget(nums, target) {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;
  let maxSum = -1;

  while (start < end) {
    const currentSum = nums[start] + nums[end];

    if (currentSum < target) {
      maxSum = Math.max(maxSum, currentSum);
      start++;
    } else {
      end--;
    }
  }

  return maxSum;
}