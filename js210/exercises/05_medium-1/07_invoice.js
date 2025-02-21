// refactor to work with invoices containing ay number of line items


function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?






// my solve
function invoiceTotal(...args) {
  return args.reduce((accum, num) => accum + num)
}
