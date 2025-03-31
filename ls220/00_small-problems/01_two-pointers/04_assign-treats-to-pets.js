
        
        
        
/*
P
//////////////////////////////////////////////////////
Given two arrays:
  1) Pet appetites.  Each integer represents the apetite of a single pet
  2) Treat sizes.  Each integer represents the size of a single treat.

When feeding a pet a treat, that pet will be satisfied if the sie of the treat is larger that the size of the pet's appetite.

Goal: maximize the number of satisfied pets
Return value: number of satisfied pets

LS Tests:
  console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
  console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
  console.log(assignTreats([1, 2, 3], [3]) === 1);
  console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
  console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
  console.log(assignTreats([1,2,3], [1,2,3]) === 3);
  console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:

Feed the hungriest pets first?  They are the hardest to satisfy
Feed the least hungry first?  

[3, 4, 2], [1, 2, 3]) === 2
                       satisfied = 0
    [2,3,4] - [1,2,3]  Sort both arrays
     ^           ^     Is there a treat large enough to satisfy this pet?
                         If yes, 
                            satisfied += 1
                            Increment both pointers by 1
    [2,3,4] - [1,2,3]  satisfied += 1, increment both pointers
       ^           ^
    [2,3,4] - [1,2,3]  out of treats! (treat pointer is out of range), return `satisfied`
         ^            ^

[1, 5], [5, 5, 6])    === 2
[1, 2, 3], [3])       === 1
[2], [1, 2, 1, 1])    === 1
[4, 3, 1], [2, 1, 3]) === 2
[1,2,3], [1,2,3])     === 3
[4, 5, 6], [1,2,3])   === 0

POINTER PLANNING
  start? both at 0
  movement?
    - matching treat? both ++
    - treat too small? right ++
  other behaviors?
    - compare value of left & right pointers
    - increment counter when match is found
  end? out of treats. (right is beyond end of treats array)
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- appetitesIdx = 0
- treatsIdx = 0
- satisfied = 0
- SORT both appetites and treats!
- while treatsIdx is less than treats.length
  - if treat is >= appetite:
    - increment `satisfied` count
    - increment both appetitesIdx and treatsIdx
  - else:
    - increment treatsIdx
- return `satisfied` count

*/

function assignTreats(appetites, treats) {
  let appetitesIdx = 0;
  let treatsIdx = 0;
  let satisfied = 0;
  appetites = appetites.toSorted((a, b) => a-b)  // O(n log n)
  treats = treats.toSorted((a, b) => a-b)        // O(n log n)
  while (treatsIdx < treats.length) {            // n
    if (treats[treatsIdx] >= appetites[appetitesIdx]) {
      satisfied += 1;
      appetitesIdx += 1;
    }
    treatsIdx += 1;
  }
  return satisfied
}

// LS TESTS
console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);


