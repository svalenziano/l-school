/* 
P
  Input = array of names (Strings)
  Return = single-character string.  Represents the most frequent letter that
    the names begin with
  Output = none
  Side effects = note
*/

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];







/* 

MY SOLUTION



E
D

A
  v1 high level
    - initialize an Object with 
    - For each name in the array
      - Determine which letter the name starts with
  v2 high level
    - create array of firstLetters
    - sort the array by the occurences of that letter in the array(descending)
    - output the first element of the array

  v3 low level
    - create array of firstLetters using MAP
    - sort the array by the occurences of that letter in the array(descending)
      - use SORTING HELPER
    - output the first element of the array

    - COUNT HELPER(array, element to count)
      - return array.reduce((count, element) => count + element === elementToCount)  
        - INITAL VALUE OF 0
        - for each element
          - increment the accumulator if the element matches elementToCount

    - SORTING HELPER(currentElement, nextElement)
      - return (count of currentElement) minus (count of nextElement) (USE COUNT HELPER)
*/

function mostFrequentFirstLetter(strings) {
  let firstLetters = strings.map((x) => x[0])
  firstLetters.sort(function sortByFirstLetter(a, b) {
    return countElement(firstLetters, b) - countElement(firstLetters, a);
  })
  return firstLetters[0];
}

function countElement(array, elementToCount) {
  return array.reduce((count, element) => count + (element === elementToCount), 0);
}

// console.log(countElement([2,3,1,1,], 1))


console.log(mostFrequentFirstLetter(names))