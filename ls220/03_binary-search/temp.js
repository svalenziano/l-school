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





console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);


/* 
my solve

P
  - inputs
    - ARRAY OF load sizes
    - Integer = maximum number of trips
  - return
    - minimum capacity
  - rules
    - cannot reorder loads
    - truck can carry orders that sum to <= capacity
    - smallest possible capacity = largest load (requires `n` trips)
    - largest possible capacity = sum of all loads (requires 1 trip)
E
D
A
  IDEA 1
    - O(n) determine smallest capacity (max of array) and largest capacity (sum of array)
    - conduct binary search between smallest and largest capacity
      - O(log n) for binary search
      - O(n) for iteration through array to determine if the capacity is big enough

  ALGO 1
    - smallest
    - largest
    - iterate over each element (let-of loop)
      - update smallest and largest
    - binary search between smallest and largest
      - if capacity is large enough:
        - update minimum capacity
        - search left
      - otherwise, search right
    
    - capacity is large enough (HELPER)
      - INPUTS:
        - `loads`
        - capacity to test
        - loadsAllowed
      - RETURN
        - boolean
      - IDEA: sliding window. If loadsRequired exceeds loadsAllowed, return False.  Return true at the end.
      - ALGO:
        - l = 0
        - loadsRequired = 1;        
        - loadSize = 0
        - for each `r` between 0 and loads.length:
          - add load at `r` to `loadSize`
          - if loadSize exceeds `loadsAllowed`:
            - increment loadsRequired
            - reset the load (move `l` to meet `r`, loadSize = value at `r`)
          - if loadsRequired > loadsAllowed:  
            - return false
        - return true
*/

function findTruckCapacity(loads, maxLoadCount) {
  // setup upper and lower bounds of 'loadSize'
  let lowerBound = 0;
  let upperBound = 0;
  for (let load of loads) {
    lowerBound = Math.max(lowerBound, load);
    upperBound += load;
  }
  // binary search
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    if (isLargeEnough(loads, mid, maxLoadCount)) {
      upperBound = mid - 1;
    } else {
      lowerBound = mid + 1;
    }
  }
  return upperBound + 1;
}

function isLargeEnough(loads, maxLoadSize, maxLoadCount) {
  let l = 0;
  let loadSize = 0;
  let loadsRequired = 1;
  for (let r = 0; r < loads.length; r++) {
    loadSize += loads[r];
    if (loadSize > maxLoadSize) {
      loadsRequired += 1;
      // reset the load
      l = r;
      loadSize = loads[r];
    }
    if (loadsRequired > maxLoadCount) {
      return false;
    }
  }
  return true;
}

// console.log(isLargeEnough([1,1], 1, 3) === true)
// console.log(isLargeEnough([1,2,3], 3, 2) === true)
// console.log(isLargeEnough([1,2,3], 3, 1) === false)
// console.log(isLargeEnough([1,1,1], 1, 3) === true)
// console.log(isLargeEnough([1,1,2], 1, 1) === false)
// console.log(isLargeEnough([5,5], 5, 2) === true)
// console.log(isLargeEnough([5,5,5], 15, 1) === true)
// console.log(isLargeEnough([5,5,5], 14, 1) === false)