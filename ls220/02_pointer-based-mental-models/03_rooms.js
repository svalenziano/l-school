"use strict";
        
        
        
/*
P
//////////////////////////////////////////////////////
// Write a function `rooms` that determines the minimum number of
// rooms required to handle a series of interviews given their
// time intervals.

// Each interval is represented as an array [start, end],
// where `start` is the start time and `end` is the end
// time of the interview.

// The function should return the number of conference rooms
// required to ensure no two interviews overlap in the same room.

// Example I:
// Input: intervals = [[20, 25], [10, 15], [0, 25]]
// Output: 2
// Explanation: The first interview is scheduled from
//              time 0 to 25. The second interview is
//              from time 10 to 15 and overlaps with
//              the first interview, requiring a second
//              room. The third interview from 20 to 25
//              also overlaps with the first. Thus, a
//              minimum of two rooms are required.

// Example II:
// Input: intervals = [[5, 9], [1, 3]]
// Output: 1
// Explanation: The first interview is scheduled from
//              time 5 to 9. The second interview is
//              from time 1 to 3. These two interviews
//              do not overlap, therefore only one
//              conference room is needed.

// Test Cases:

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
console.log(rooms([[5, 9], [1, 3]]) === 1);
console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
console.log(rooms([[1, 10]]) === 1);
console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);
// All test cases should log true


MY RULES
  - How to determine the number of overlapping meetings?
  - Two meetings are overlapping if the end time of the first meeting is after the start time of the second meeting


E
//////////////////////////////////////////////////////
My examples & tests:

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
  [[10, 15], [20, 25], , [0, 25]]


console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
  - Already sorted
  [[1, 5], [2, 3], [4, 6], [5, 7]] 
      ^      ^                     
  [[1, 5], [2, 3], [4, 6], [5, 7]]
      ^               ^            
  [[1, 5], [2, 3], [4, 6], [5, 7]] 
      ^                       ^    
  [[1, 5], [2, 3], [4, 6], [5, 7]]
              ^               ^   
  [[1, 5], [2, 3], [4, 6], [5, 7]]
                     ^       ^    

console.log(rooms([[5, 9], [1, 3]]) === 1);
  [[5, 9], [1, 3]]         
     ^        ^ 

console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
  [[1, 3], [2, 4], [4, 6]]
      ^       ^

console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);
  [[1, 4], [1, 3], [1, 2], [1, 5]]
      ^       ^
  [[1, 4], [1, 3], [1, 2], [1, 5]]
      ^              ^
  [[1, 4], [1, 3], [1, 2], [1, 5]]
      ^                        ^
  [[1, 4], [1, 3], [1, 2], [1, 5]]
      ^                             ^


*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1
  - sort meetings by END time (sort nested arrays by first element)
  - currentNeed = 1 (start w 1)
  - minRoomsNeeded = 1 (start w 1)
  - anchor at first mtg
  - runner at second mtg
  - while runner is within bounds?
    - if mtg at runner overlaps mtg at anchor:
      - currentNeed = runner - anchor + 1
      - update minRoomsNeeded with currentNeed (as appropriate, using Math.max)
      - increment runner
    - else (no overlap)
      - increment anchor
      - if runner === anchor, increment runner
  - overlap (HELPER)
    - given mtg1 and mtg2, mtg2 overlaps mtg1 if:
      - end time of mtg1 is greater than beginning of mtg2

v2
  - use pointer-based "queue" to keep track of meetings (use indices from orig list)
  - sort by end time
  - if leftmost element end time is less than rightmost element start time
    - shift leftmost (move pointer right)
  - 3 meetings are overlapping 
*/

// LS TESTS
console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
console.log(rooms([[5, 9], [1, 3]]) === 1);
console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
console.log(rooms([[1, 10]]) === 1);
console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);


// my solution
function meetingsOverlap(mtg1, mtg2) {
  // assumes meetings are sorted by end time, ascending
  // if end time of mtg1 is greater than start time of mtg2, they overlap
  return mtg1[1] > mtg2[0]
}

// console.log(meetingsOverlap([10, 15], [20, 25]) === false);
// console.log(meetingsOverlap([0, 25], [20, 25]) === true);
// console.log(meetingsOverlap([0, 25], [10, 15]) === true);
// console.log(meetingsOverlap([1,2], [2,3]) === false);
// console.log(meetingsOverlap([1,2], [1,3]) === true);
// console.log(meetingsOverlap([1,3], [1,3]) === true);

function rooms(meetingsList) {
  // sort mtgs by end time
  let sorted = meetingsList.toSorted((a, b) => a[1] - b[1])

  let roomsNeeded = 1, s = 0, e = 1;

  while (e < sorted.length) {
    if (meetingsOverlap(sorted[s], sorted[e])) {
      let currentNeed = e - s + 1;
      roomsNeeded = Math.max(currentNeed, roomsNeeded);
      e += 1;
    } else {
      s += 1;
      if (s === e) e += 1;
    }
  }
  return roomsNeeded;
}


// LS solution
function rooms(intervals) {
  if (!intervals || intervals.length === 0) {
    return 0;
  }

  const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);

  let s = 0, e = 0, roomCount = 0;

  while (s < intervals.length) {
    if (startTimes[s] >= endTimes[e]) {
      e += 1;
    } else {
      roomCount += 1;
    }
    s += 1;
  }

  return roomCount;
}