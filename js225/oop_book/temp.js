let invoice = {
  phone: 3000,
  internet: 6500,
};
let payment = {
  phone: 1300,
  internet: 5500,
};
let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700