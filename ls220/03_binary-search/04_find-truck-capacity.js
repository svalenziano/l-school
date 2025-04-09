"use strict";

// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters





// console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
// console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
// console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
// console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
// console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
// console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
// console.log(findTruckCapacity([100], 1) === 100);
// console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
// console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
// console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
// console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
// console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
// console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
        
        
        
/*
P
//////////////////////////////////////////////////////
INPUT =
  - array of order sizes
  - maxTrips - max number of trips the truck can make
RETURN =  minimum truck capacity

RULES
  - array order matters: must deliver from left to right!
  - orders cannot be split.  Must fit entirely into truck


E
//////////////////////////////////////////////////////

([1, 2, 3, 4, 5], 1) -> 15
  - easy - just add up all the elements

(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10)
  - Start out by determining the min and max truck sizes:
    - O(n) scan list from start to finish:
      - totalVolume = sum of all elements
      - minVolume = minimum of array.  Or if ya wanna be super simple... 1
  - variables
    - minTruckSize
  - Binary search between absolute max and minimum truck sizes.  For each size:
    - check truck size using HELPER
    - if truck is large enough:
      - update minTruckSize
      - check to see if smaller trucks will work (shift window left)
    - else:
      - check larger trucks (shift window right)

  - isTruckBigEnough
    - INPUTS
      - array of order sizes
      - truck size
      - max trips
    - GENERAL ALGO:
      - if number of trips required to haul stuff exceeds the max, return false
      - simulate each trip
        - if you've executed maxTrips and stuff hasn't been hauled, return false
    - variables
      - anchor and runner pointers to 'fill each truckload'
      - loadSize
      - trips = keep track of trips that have been executed thus far
    - while there's still junk to haul (runner hasn't exceeded the array)
      - while truck isn't full, fill up the truck!
        - make the load bigger (move runner)
        - if the load exceeds the truck, you'll break outa this loop
      - increment trips
      - If trips exceeds maxTrips, and runner isn't at end, return false
      - get the next load (reset loadSize & increment the anchor)
    - Return true


My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/




function findTruckCapacity(orderVolumes, maxTrips) {
  // Set upper and lower bounds for binary search
  console.log(orderVolumes, maxTrips)
  let l = 0;
  let r = orderVolumes.reduce((accum, ele) => accum + ele)
  let minTruckSize = r;
  while (l <= r) {
    let midpoint = Math.floor((l + r) / 2);
    if (isTruckBigEnough(orderVolumes, midpoint, maxTrips)) {
      console.log('updating minTruckSize to', midpoint)
      minTruckSize = Math.min(minTruckSize, midpoint);
      r = midpoint - 1;
    } else {
      l = midpoint + 1;
    }
  }
  console.log('returning', minTruckSize);
  return minTruckSize;
}

function isTruckBigEnough(orderVolumes, truckSize, maxTrips) {
  let a = 0;      // anchor
  let r = 0;      // runner
  let loadSize = 0;   // keep track of stuff that's currently in the truck
  let trips = 0;      // trips so far
  
  // while there's still stuff to haul
  while (r < orderVolumes.length) {
    // expand the window
    while (loadSize < truckSize) {
      if (orderVolumes[r] > truckSize) return false;
      loadSize += orderVolumes[r];
      // console.log('loadSize', loadSize)
      r++;
    }
    // console.log('Trip:', orderVolumes.slice(a, r - 1), ', r =', r)
    trips++;
    if ((trips >= maxTrips && (r > orderVolumes.length))) return false;  // 
    // Move the window right / reset the window and get the next load:
    a = r;
    loadSize = 0;
  }
  // console.log('Returning true')
  return true;
}

// my tests
console.log(isTruckBigEnough([1,1,1], 1, 4) === true)
console.log(isTruckBigEnough([1,1,1], 1, 2) === false)
console.log(isTruckBigEnough([1, 2, 1, 2], 1, 4) === false)
console.log(isTruckBigEnough([1, 2, 1, 2], 3, 4) === true)
console.log(isTruckBigEnough([2, 2, 2], 2, 3) === true)
console.log(isTruckBigEnough([1, 2, 1, 2], 3, 2) === true)
console.log(isTruckBigEnough([1, 2, 1, 2], 3, 2) === true)

console.log(isTruckBigEnough([10, 20, 30, 40, 50], 50, 5) === true);
console.log(isTruckBigEnough([3, 2, 4, 1, 5], 5, 10) === true);
console.log(isTruckBigEnough([1000, 1000, 1000, 1000], 2000, 3) === true);

console.log(isTruckBigEnough([3, 2, 5, 8, 4], 8, 3) === false)
console.log(isTruckBigEnough([3, 2, 5, 8, 4], 10, 3) === true)


