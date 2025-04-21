// function to get the substrings for the given string
function getAllSubstrings(str) {
   let result = [];

   function recurse(startIndex, endIndex) {
      // Base case
      if (endIndex === str.length) {
         return;
      }

      // Recursive case
      if (startIndex > endIndex) {
         recurse(0, endIndex + 1);
      } else {
         result.push(str.slice(startIndex, endIndex + 1));
         recurse(startIndex + 1, endIndex);
      }
   }

   recurse(0, 0);
   return result;
}

const inputStr = "wxyz";
const subStr = getAllSubstrings(inputStr);
console.log(subStr);