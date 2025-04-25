'use strict';
// You are given an array of intervals, where each interval is represented
// by an array [start, end] indicating the start and end points. Your task
// is to merge all overlapping intervals and return an array of
// non-overlapping intervals that cover all the original intervals.


// Example 1:

// Input: intervals = [[2,5], [4,8], [10,12], [13,16]]
// Output: [[2,8], [10,12], [13,16]]
// Explanation: Intervals [2,5] and [4,8] overlap, so they are merged into [2,8].

// Example 2:

// Input: intervals = [[3,6], [3,4], [5,8], [7,9]]
// Output: [[3,9]]
// Explanation: All intervals overlap and are merged into a single interval.

function mergeIntervals(intervals) {
  // Your implementation here
}

// Test Cases
console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// Expected: [[1,4], [6,11]]

console.log(mergeIntervals([[2,5], [4,8], [10,12], [13,16]]));
// Expected: [[2,8], [10,12], [13,16]]

console.log(mergeIntervals([[3,6], [3,4], [5,8], [7,9]]));
// Expected: [[3,9]]

console.log(mergeIntervals([[1,3], [5,7], [9,11]]));
// Expected: [[1,3], [5,7], [9,11]]

console.log(mergeIntervals([[1,4], [0,4]]));
// Expected: [[0,4]]

console.log(mergeIntervals([[1,4], [2,3]]));
// Expected: [[1,4]]

console.log(mergeIntervals([]));
// Expected: []

console.log(mergeIntervals([[1,4], [4,5]]));
// Expected: [[1,5]]
        
        
/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/

// LS TESTS



