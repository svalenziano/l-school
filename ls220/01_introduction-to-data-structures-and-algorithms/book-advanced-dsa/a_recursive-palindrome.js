function isPalindrome(str) {
  return isPalindromeHelper(str, 0, str.length - 1)
}

function isPalindromeHelper(str, left, right) {
  if (right - left <= 1) {
    return true;
  }
  return (
    str[left] === str[right] &&
    isPalindromeHelper(str, left + 1, right - 1)
  );
}

console.log(isPalindrome('101010101') === true);  
console.log(isPalindrome('madam') === true);  
console.log(isPalindrome('mad') === false);  




/* 
madam
  length = 5
  midpoint = (length - 1) / 2 = 1.5
*/