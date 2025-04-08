// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

// Example:
// Input: terrain = [1, 3, 2, 1, 4, 5]
// Output: 1 or 5
// Explanation: Both index 1 (elevation 3) and index 5
//              (elevation 5) are peaks.



console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// All test cases should log true
        




        
/*
P
//////////////////////////////////////////////////////
INPUT = ARRAY OF INTS
RETURN = INTEGER representing a 'peak'

RULES
  - adjacent terrain heights are never equal (there are no flat spots)
  - what is a peak?
    - a local high point: numbers on either side 'slope away' from the peak
    - an endpoint that is higher than the adjacent 'terrain'
  - given two adjacent points, the higher point points toward a peak

E
//////////////////////////////////////////////////////
My examples & tests:
*/
console.log(findPeakInTerrain([1]) === 0);
console.log(findPeakInTerrain([5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5]) === 4);
console.log([0, 4].includes(findPeakInTerrain([8, 2, 3, 4, 5])));
console.log([1, 3].includes(findPeakInTerrain([3, 5, 3, 7, 2])));

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- general approach: binary search, determining which way to search using the vector provided by the 'found points' (at the midpoint).  Stop searching as soon as you've found a peak.

v1
  - maxHeight
  - maxIndex
  - left
  - right
  - Find the three points at the midpoint
  - if the midpoint is a peak, return it
    - is a peak if: point on either side is less than midpoint OR is undefined (return peak height)
    - if left is larger than peak, vector left (-1)
    - else vector right (1)
  - Determine the maxHeight and the vector
  - update left/right to Search in the direction of the vector

v2
  - maxHeight = 0
  - maxIndex = -1
  - while left > right
    - get element at midpoint
    - update maxHeight and maxIndex
    - If point to the right is greater-than
      - Search right
    - else
      - search left
  - return maxIndex

*/

// LS TESTS



function findPeakInTerrain(terrain) {
  let maxHeight = -1;
  let maxIndex = -1;
  let l = 0, r = terrain.length;
  while (l <= r) {
    let midpoint = Math.floor((l + r) / 2);
    let current = terrain[midpoint];
    if (current > maxHeight) {
      maxHeight = current;
      maxIndex = midpoint;
    }
    // continue searching in the 'uphill' direction
    if (terrain[midpoint + 1] > current) {
      l = midpoint + 1;
    } else {
      r = midpoint - 1
    }
  }
  // console.log(maxIndex)
  return maxIndex;
}



// LS solution
// function findPeakInTerrain(terrain) {
//   if (terrain.length === 1) {
//     return 0;
//   }

//   function isPeak(mid, terrain) {
//     if (mid === 0) {
//       return terrain[mid] > terrain[mid + 1];
//     }
//     if (mid === terrain.length - 1) {
//       return terrain[mid] > terrain[mid - 1];
//     }
//     return terrain[mid - 1] < terrain[mid] && terrain[mid] > terrain[mid + 1];
//   }

//   let left = 0;
//   let right = terrain.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (isPeak(mid, terrain)) {
//       return mid;
//     } else if (mid !== terrain.length - 1 && terrain[mid + 1] > terrain[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// }