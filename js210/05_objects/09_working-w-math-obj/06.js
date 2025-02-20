

/* 
low
high

     low -------- high
      |             |
           |
          num

(random * (high - low) ) + low

low = 2
high = 9
random = 0.1 
0.1 * 7  = 0.7 + 2 = 2.7

random = 0.0
0 * 7 + 2 = 2

random = 1
1 * 7 + 2 = 9
*/

function randomIntInclusive(low, high) {
  // returns random integer, inclusive of `low` and high` args
  if (typeof low !== 'number' || typeof high !== 'number') {
    throw new Error("Only numbers are allowed.")
  }
  let nums = [low, high].sort((a,b) => a - b);
  low = nums[0]
  high = nums[1]
  return Math.floor(Math.random() * (high - low + 1) + low)
}

function randomFloatInclusive(low, high) {
  // returns random floating point num, inclusive of `low` and high` args
  /* Due to floating point imprecision, it is very unlikely that `high` 
      will EVER be returned! */
  if (typeof low !== 'number' || typeof high !== 'number') {
    throw new Error("Only numbers are allowed.")
  }
  let nums = [low, high].sort((a,b) => a - b);
  low = nums[0]
  high = nums[1]
  return (Math.random() * (high-low)) + low;
}

// Testing the output of random floats
for (let i = 0; i<99999; i++) {
  let x = randomFloatInclusive(0, 3);
  if (x > 2.999 || x < 0.001) {
    console.log(x)
  }
}