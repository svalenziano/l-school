// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

// Example:
// Input: nums = [1, 2, 1, 4, 8]
// Output: [2, 4, 8, 1, 1]


/* 
MY SOLVE

BRUTE FORCE
  - for each element in the array:
    - if the element is a one, pop it out (splice) and push it onto the back of the array
    - 


ANCHOR-RUNNER POINTER
  - anchor: find last element that's not a one
  - runner: traverse from beginning, selecting elements that ARE a one and moving them to the end



*/