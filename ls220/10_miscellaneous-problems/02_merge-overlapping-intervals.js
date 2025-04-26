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



// Test Cases
// console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// // Expected: [[1,4], [6,11]]

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

 - Given 2 intervals:
  - if the beginning of interval 1 is sooner than the end of interval 2, then they are separate
E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- create deep copy of nested array
- anchor and runner pointers at 0 and 1
- while anchor is less than last element (must have at least 2 to compare):
  - Should intervals be merged?
    - yes: remove both intervals (splice) and unshift a new interval into the beginning of the array.  Move anchor and runner back to home positions (0 and 1)
    - no: move runner
  - if runner is beyond end of list (=== length):
    - increment the anchor and move the runner to anchor + 1
- return result

how to tell if intervals should be merged?
  - end of first is greater than beginning of second
  - end of second is greater than beginning of first

*/


function mergeIntervals(intervals) {
  intervals = JSON.parse(JSON.stringify(intervals));
  let anchor = 0;
  let runner = 1;



  while (anchor < intervals.length - 1) {
      // merge
    let aStart = intervals[anchor][0];
    let aEnd = intervals[anchor][intervals[anchor].length - 1]
    let rStart = intervals[runner][0];
    let rEnd = intervals[runner][intervals[runner].length - 1]

    if (aStart >= rStart && aStart <= rEnd ||  // end of first >=  beginning of second
        rStart >= aStart && rStart <= aEnd) {
      let min = Math.min(aStart, rStart);
      let max = Math.max(aEnd, rEnd);
      intervals.splice(anchor, 1);
      intervals.splice(runner - 1, 1);
      intervals.unshift([min, max]);
      anchor = 0;
      runner = 1;
      } else {
    runner++;
    } 
    if (runner === intervals.length) {
      anchor += 1;
      runner = anchor + 1;
    }
  }
  return intervals;
} 


// LS solution with SV comments
/* 

result[result.length - 1] = 'end' number of last eleement of result

 */
function mergeIntervals(intervals) {
  if (!intervals.length) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  // iterate thru elements of intervals
  for (let i = 1; i < intervals.length; i++) {
    // if there's an overlap (if 'end' number of last ele. of result >= the start number )
    if (result[result.length - 1][1] >= intervals[i][0]) {
      // Update `result` to reflect the larger interval
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    // Otherwise (no overlap), simply push the interval to result
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}