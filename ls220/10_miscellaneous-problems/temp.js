/* 
In this problem, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

Requirements:

    The input will be an array of numbers and an integer k.
    You need to find the average of every contiguous subarray of size k in the array.
    The output should be an array containing these averages.

Example test cases: 
*/

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]


/* 
IDEA: Make a window of size k (create sum as you go).  While the right side of the window is less than the length of the array, push the "window average" to `result`, then move the window right by one index (subtract left value, move left, add right value, move right).  Return result.

How to find the average?
IDEA: Maintain a 'running sum' of the window.  With each move of the window, drop the leftmost value, and add the rightmost value.  Average is `sum / k`

ALGO:
  - 
*/

function findAverages(arr, k) {
  let l = 0;
  let r = 0;
  let windowSum = arr[0];
  let result = [];
  
  // setup the window
  for (let i = 1; i < k; i++) {
    r += 1;
    windowSum += arr[r];
  }

  while (r < arr.length) {
    // console.log('l:', l, ', r:', r, 'windowSum: ', windowSum)
    result.push(windowSum / k)

    //update the window
    windowSum -= arr[l]
    l += 1;
    r += 1;
    windowSum += arr[r];
  }
  return result;
}

