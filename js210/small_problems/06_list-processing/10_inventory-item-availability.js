/*
P
  INPUT = 1) integer = id to query for
          2) list of objects
  RETURN = boolean
      - true if the item will be in-stock at the end of the transaction ledger
      - otherwise false
  OTHER NOTES
    - movement value of 'in' means that the warehouse inventory is increasing. 
    - movement value of 'out' means the warehouse is running out of widgets.
E
D
A
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


// MY SOLUTION
/* 
E

D
A
  - reduce the list of objects to a quantity
  - return `quantity > 0`

  how to perform the reduction?
    - add to the accum if movement === 'in',
      otherwise subtract
*/

function isItemAvailable(idToCheck, listOfTransactions) {
  let widgetsAvailable = listOfTransactions
      .filter(({id}) => id === idToCheck)
      .reduce((inventory, transaction) => {
        if (transaction['movement'] === 'in') {
          return inventory + transaction['quantity'];
        } else {
          return inventory - transaction['quantity'];
        }
      }, 0);
  return widgetsAvailable > 0;
}


