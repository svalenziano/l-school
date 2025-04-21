// You're a clever thief planning a heist in a neighborhood
// where houses are arranged in a line. Each house contains a
// certain amount of valuable loot. However, the houses have a
// unique security system: if two adjacent houses are robbed, it
// triggers a neighborhood-wide alarm.

// Given an array of integers representing the value of loot in
// each house, determine the maximum amount of loot you can
// steal without triggering the alarm system.


// Example 1:
// Input: houses = [3,1,4,1,5]
// Output: 12
// Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
// Total loot stolen = 3 + 4 + 5 = 12.

// Example 2:
// Input: houses = [6,2,7,9,3,1]
// Output: 16
// Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
// Total loot stolen = 6 + 7 + 3 = 16.

function maximizeLoot(houses) {
  // Implementation goes here
}

// Test cases
console.log(maximizeLoot([3,1,4,1,5]) === 12);
console.log(maximizeLoot([6,2,7,9,3,1]) === 16);
console.log(maximizeLoot([2,1,1,2]) === 4);
console.log(maximizeLoot([1,2,3,1]) === 4);
console.log(maximizeLoot([2,7,9,3,1]) === 12);
console.log(maximizeLoot([1,1,1,1,1,1,1,1,1,1]) === 5);
console.log(maximizeLoot([10,1,1,10]) === 20);
console.log(maximizeLoot([5,3,4,11,2]) === 16);
console.log(maximizeLoot([1]) === 1);
console.log(maximizeLoot([]) === 0);

// All test cases should log true
        
        
        
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


// my solve - works!
function maximizeLoot(houses) {
  let p = 0;  // pointer
  let cache = new Map();

  return f(houses, p);

  function f(houses, p) {
    // check cache
    if (cache.has(p)) {
      return cache.get(p);
    }
    
    // no houses left
    if (p >= houses.length) {
      return 0;
    }
    // 1 house left
    if (p === houses.length - 1) {
      return houses[p];
    }

    let result = Math.max(
      houses[p] + f(houses, p + 2),  // first two houses are now disqualified
      houses[p+ 1] + f(houses, p + 3)
    )
    cache.set(p, result);
    return result;


  }
}

// LS solve
function maximizeLoot(houses) {
  const cache = new Map();

  function helper(idx) {
    if (idx >= houses.length) return 0;

    if (!cache.has(idx)) {
      cache.set(idx, Math.max(houses[idx] + helper(idx + 2), helper(idx + 1)));
    }

    return cache.get(idx);
  }

  return helper(0);
}