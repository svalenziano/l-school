/* 
CREATE FUNCTIONS THAT EMULATE push AND  pop
Pop
- Input: array
- Return: popped value
- Side effect: mutate array (remove popped element)
*/



// ls tests
// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0


// my solve
/* 
P
E
D
A
*/