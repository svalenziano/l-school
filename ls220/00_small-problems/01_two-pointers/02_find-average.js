
        
        
        
/*
P
//////////////////////////////////////////////////////
Given an array of `num`, and integer `k`, return an array of integers, where each integer is the average of each `continuous subarray` of length `k`

Example:  findAverages([1, 2, 3, 4, 5, 6], 3) -> [ 2, 3, 4, 5 ]
                        -------> avg of 1,2,3 = 2
                           ------->  avg of 2,3,4 = 3
                               -------
                                  -------
                              
Rules:
- Input is always array and integer k

LS Examples:
console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]






E
//////////////////////////////////////////////////////
My examples & tests:

[1, 2, 3, 4, 5, 6], k=3
--------> index 0 thru 2.  Abort when diff = k.

[1, 2, 3, 4, 5, 6]  sums + 1
 ^
[1, 2, 3, 4, 5, 6], k=3  r += 1 /// sums + 2
 ^  ^
[1, 2, 3, 4, 5, 6], k=3  r += 1 /// sums + 3 /// r - a = k - 1! ///  a += 1.
 ^     ^
[1, 2, 3, 4, 5, 6], k=3
    ^
[1, 2, 3, 4, 5, 6], k=3
    ^  ^
...
[1, 2, 3, 4, 5, 6], k=3  r is at end of array (length minus 1), end execution and return result
          ^     ^
length = 6.  r is at 5 at the beginning of loop, at 6 at the end of this loop


*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1 brute force
  - create array of every subarray of length k  O(n)
  - for each subarray, append average of each subarray to a new array of averages O(2^n)?
  - return that array

v2 anchor runner O(n)
  - start a where? 0
  - start r where? 0
  - move a when?  see below
  - move r when?
    - increment with each iteration
  - move both a and r when r - a === k - 1
    - r: match idx of a 
    - a: increment by one
    - average the `sums` and reset sums to 0
  - a aux func? none
  - r aux func? add value to `sums`
  - stop iteration? r is at end of array (r idx === length - 1)
*/

// MY CODE
function findAverages(arr, k) {
  let a = 0;
  let r = 0;
  let averages = [];
  let sums = 0;
  while (r < arr.length) {
    sums += arr[r];
    r += 1;
    if (r - a === k) {
      a += 1;
      r = a;
      averages.push(sums / k)
      sums = 0;
    }
  }
  return averages;
}


// LS CODE
function findAverages(nums, k) {
  let result = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }
  return result;
}

/* 
UNDERSTANDING THE LS SOLUTION
[1, 2, 3, 4, 5, 6]  windowSum + 1
 ^
[1, 2, 3, 4, 5, 6]  windowSum + 2
 ^  ^
[1, 2, 3, 4, 5, 6]  windowSum + 3 /// right >= k-1
 ^     ^            push average
                    windowSum -= 1 (partially re-use the value of windowSum!)
                    left += 1 (move the window right)
[1, 2, 3, 4, 5, 6]  windowSum + 4
    ^     ^         push average
                    repeat...
*/



// LS TESTS
console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]

