/*
P
  INPUT = ARRAY of strings
  OUTPUT = print the count of each vehicle (see tests)
E
D
A
*/

// TESTS
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
// EXPECTED OUTPUT:
  // console output
  // car => 4
  // truck => 3
  // SUV => 1
  // motorcycle => 2
  // suv => 1


// MY SOLUTION
/* 
P
E
D
A
  - create empty dict
  - for each element in `vehicles`
    - set default value in the dict, if none exists
    - increment the dict value
  - for each element in the dict
    - print the name and the count

*/

function countOccurrences(arrayOfStrings) {
  let found = {};
  for (let string of arrayOfStrings) {
    found[string] = found[string] || 0;
    found[string] += 1;
  }
  for (let string in found) {
    console.log(string, "=>", found[string])
  }
}