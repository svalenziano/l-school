/* 
SAME PROBLEM AS PREVIOUS, EXCEPT YOU SHOULD TAKE A BOTTOM-UP DYNAMIC PROGRAMMING APPROACH
Time: O(n)
Space: O(1)
*/

console.log(hoppingChaos(2) === 2);
console.log(hoppingChaos(3) === 3);
console.log(hoppingChaos(4) === 5);
console.log(hoppingChaos(8) === 34);
console.log(hoppingChaos(13) === 377);
console.log(hoppingChaos(17) === 2584);
console.log(hoppingChaos(21) === 17711);
console.log(hoppingChaos(50) === 20365011074);
// All test cases should log true.






/* 
My solve

Use two-element array for previous solutions?
f(n) = 
  - if n = 1 -> 1
  - if n = 2 -> 2
  - dp = [1, 2] (queue)
  - result = 2;
  - for each value between 3 and n (inclusive):
    - result = sum of `dp`
    - update dp (shift and push)
      - shift out the oldest value and discard
      - push `result`
  - return result;
*/

function hoppingChaos(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let [a, b] = [1, 2];
  let result;
  for (let i = 3; i <= n; i++) {
    result = a + b;
    [a, b] = [b, result];
  }
  return result;
}