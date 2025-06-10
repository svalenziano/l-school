let invoices = {
  unpaid: [],
  paid: [],

  add(company, amount) {
    this.unpaid.push({company, amount})
  },

  totalDue() {
    return this.unpaid.reduce((accum, ele) => accum + ele.amount, 0)
  },

  getIdx(collection, companyName) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].company === companyName) {
        return i;
      }
    }
    return -1;
  },

  payInvoice(company) {
    let idx = this.getIdx()
  }
}

invoices.add("Starbucks", 300)
invoices.add("Weeblewoble", 123)
// console.dir(invoices)
console.log(invoices.totalDue())