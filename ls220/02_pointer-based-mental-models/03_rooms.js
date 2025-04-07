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
  - iF 

E
//////////////////////////////////////////////////////
My examples & tests:

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
  [[20, 25], [10, 15], [0, 25]]
  [[0, 25], [10, 15], [20, 25]]  2 rooms!
      ^         ^ 
  [[0, 25], [10, 15], [20, 25]]  3 rooms?!?!  (incorrect)
      ^                   ^ 



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
  - sort meetings by start time (sort nested arrays by first element)
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
*/

// LS TESTS
// console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
// console.log(rooms([[5, 9], [1, 3]]) === 1);
// console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
// console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
// console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
// console.log(rooms([[1, 10]]) === 1);
// console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
// console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
// console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
// console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
// console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
// console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);

function meetingsOverlap(mtg1, mtg2) {
  // assumes mtg1 start time is early than mtg2 start time
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
  // sort mtgs by start time
  let sorted = meetingsList.toSorted((a, b) => a[0] - b[0])
  let minRoomsNeeded = 1;
  let anchor = 0;
  let runner = 1;
  while (runner < sorted.length) {
    if (meetingsOverlap(sorted[anchor], sorted[runner])) {
      let currentNeed = runner - anchor + 1;
      minRoomsNeeded = Math.max(currentNeed, minRoomsNeeded);
      runner += 1;
    } else {
      anchor += 1;
      if (anchor === runner) runner += 1;
    }
  }
  console.log(minRoomsNeeded);
  return minRoomsNeeded;
}