

console.log(isPalindrome("a") === true)
console.log(isPalindrome("bab") === true)
console.log(isPalindrome("aa") === true)
console.log(isPalindrome("aba") === true)
console.log(isPalindrome("aaa") === true)
console.log(isPalindrome("aaaa") === true)
console.log(isPalindrome("baaaab") === true)
console.log(isPalindrome("aaaaaab") === false)
console.log(isPalindrome("ab") === false)
console.log(isPalindrome("ba") === false)













/* 
my solve
  - start pointers at the beginning and end
  - while l < r:
    - if str[l] !== str[r]:
      - return false
    - move pointers
  - return true



*/

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
}

/* 
using recursion

- base case = str is 1 or 0 chars long => it's a palindrome!
- recursive def = The string is a palindrome if the chars at pointers are identical, and the string at the inward facing pointers are also a palindrome
*/

function isPalindrome(str) {
  return helper(0, str.length - 1)

  function helper(l, r) {
    if (r - l <= 0) {
      return true;
    }
    return (str[l] === str[r]) && helper(l + 1, r - 1)
  }
}

