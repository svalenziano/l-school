/*
P
  INPUT = string in "First Last" format
  OUTPUT = STRING, in "Last, First" format
E
D
A
*/

// TESTS
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Hanna node 07 Boops'));    // 'Boops, Hanna


// MY SOLUTION
function swapName(string) {
  let [firstName, lastName] = string.split(' ');
  return `${lastName}, ${firstName}`;
}

