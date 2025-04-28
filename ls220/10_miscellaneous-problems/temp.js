/* 
Imagine you're a pet owner wanting to give treats to your pets. Each pet has a specific appetite level represented by an array appetite[i], which is the minimum size of a treat the pet will be happy with. Each treat has a size represented by an array treats[j]. A pet will be satisfied if the size of the treat treats[j] is greater than or equal to its appetite level appetite[i]. Your goal is to maximize the number of satisfied pets and output the number of satisfied pets in the end.





*/

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.





/* 
console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
APPROACH:
    APPETITE    TREATS
    2,3,4       1,2,3
        
    4,5,6       1,2,3

IDEA:  Sort both arrays.  Initialize pointers at the end of each list (pointing to the largest treat and the biggest appetite).  Find the largest appetite that can possibly be satisfied with the largest treat, then continue until all treats (or pets) have been exhausted

ALGO:
  - Sort both arrays
  - satisfied = 0;
  - pointers:
    - app = app.length - 1
    - treat = treats.length - 1
  - while treats >= 0 && app >= 0:
    - if the appetite is too large for the treat:
      - move the app pointer to find a smaller appetite
    - otherwise:
      - increment satisfied
      - move the treat pointer left (the treat has been consumed)
      - move the pet pointer left, too!  (the pet has been fed)
  - return satisfied
 */

function assignTreats(petAppetites, treatSizes) {
  petAppetites.sort((a, b) => a - b);
  treatSizes.sort((a, b) => a - b);
  let satisfied = 0;
  let petPointer = petAppetites.length - 1;
  let treatPointer = treatSizes.length - 1;
  
  while (treatPointer >= 0 && petPointer >= 0) {
    if (petAppetites[petPointer] > treatSizes[treatPointer]) {
      petPointer -= 1;
    } else {
      satisfied += 1;
      treatPointer -= 1;
      petPointer -= 1;
    }
  }
  console.log(satisfied)
  return satisfied;
}
