/*
Write two functions that accept strings as args

`indexOf(firstString, secondString)`
  - searches for first instance of substring that matches secondString, returns index of char where substring begins
  - returns -1 if substring isn't found

`lastIndexOf(firstString, secondString)`
  - searches for last instance of substring
  - returns -1 if substring isn't found

*/

// LS EXAMPLES
function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

// MY SOLUTION
/*
P
E
  ""
D
A
  V1 HIGH LEVEL
  - start_index = -1
  - direction = +1 or -1
  - for each second_char in `secondString`
    - for each current_index, first_char in `firstString`
      - if first_char === second_char:
        - if start_index === -1:
          - set start_index to current_index
        - else:
          - ...

  V2 HIGH LEVEL
  - search thru the firstString for the first letter of the secondString
  - if that letter is found, 
    - If the rest of the string matches:
      - return the starting index
    - else
      - keep on looking for the first letter
  - if nothing else, return -1
  
  V2 LOW LEVEL
  - charPositionInString(character, string) (HELPER)
    - return index of character within string
    - -1 if char doesn't exist
    
  - stringIsIdentical(str1, str2) (HELPER)
    - return true or false
    - compare character by character

  - MAIN FUNCTION
    - LET searchStart = 0
    - if charPositionInString > -1: (search thru the firstString for the first letter of the secondString):
      - set searchStart = charPositionInString  
      - IF stringIsIdentical (check if the rest of the string matches)
          - return searchStart
      - ELSE (character wasn't found)
        - return -1

  v3 low level (based on v2 high level)
    - LET mismatch;
    - startIndices = create range between 0 and (string1.length - string.2length)
    - if searchDirection === backwards
      - reverse the startIndices array
    - for each startSearchIndex in startIndices:
      - mismatch = false
      - while mismatch === false:
          - for index in string2:
            - if string2 char DOESN'T match string1 char (startIndex + current index):
              - mismatch = true
            - if you reach the end of string 2 (it's a full match):
              - return startSearchIndex
    - return -1

C

*/

function createRange(start, stop) {
  let nums = [];
  for (let i = start; i < stop; i++) {
    nums.push(i);
  }
  return nums;
}

function indexOf(str1, str2) {
  return indexOfHelper(str1, str2, reverse=false);
}

function lastIndexOf(str1, str2) {
  return indexOfHelper(str1, str2, reverse=true);
}

function indexOfHelper(str1, str2, reverse=false) {
  let mismatch;
  let startIndices = createRange(0, str1.length - str2.length + 1);
  if (reverse) {
    startIndices = startIndices.reverse();
  }
  // For each start index, check if str2 is substring of str1
  for (let startIndex of startIndices) {
    mismatch = false;
    while (mismatch === false) {
      for (let str2idx = 0; str2idx < str2.length; str2idx++) {
        let str2character = str2[str2idx];
        let str1character = str1[startIndex + str2idx];
        if (str2character !== str1character) {
          mismatch = true;
          break;
        }
        // If it's a full match (you've reached the end of the string)
        if (str2idx === str2.length - 1) {
          return startIndex;
        }
      }
    }
  }
  return -1;
}
