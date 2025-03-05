/*
P
  input = 1) integer (item ID)
          2) list of objects, eg: [ { id: 101, movement: 'in',  quantity:  5 }, ... ]
  output = list of objects.  Filtered to contain only those with an ID matching the integer arg.

*/

// TESTS
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


// MY SOLUTION
/* 

E
D
A
  - Filter.  Criteria = 'id' key = arg1
*/
function transactionsFor(idToMatch, transactionsToFilter) {
  return transactionsToFilter.filter((obj) => obj['id'] === idToMatch)
}

