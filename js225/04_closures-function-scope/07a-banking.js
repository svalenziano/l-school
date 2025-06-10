function makeAccount(acctNumber) {
  let account = {
    acctNumber,
    balance: 0,
    transactions: [],

    pushTransaction(type, amount) {
      this.transactions.push({
        type,
        amount,
      })
    },

    deposit(amount) {
      this.balance += amount;
      this.pushTransaction('deposit', amount);
      return amount;
    },

    withdraw(amount) {
      if (this.balance < amount) {
        amount = this.balance;
      }
      this.balance -= amount;
      this.pushTransaction('withdrawal', amount);
      return amount;
    },

    logTransaction() {
      console.log()
    }
  }

  return account;
}

function makeBank() {
  return {
    accounts: [],
    nextAccountNum: 101,
    openAccount() {
      let a = makeAccount(this.nextAccountNum);
      this.accounts.push(a);
      console.log("Created account #", this.nextAccountNum);
      this.nextAccountNum += 1;
      return a;
    },
  }
}

let bank = makeBank();

let account1 = bank.openAccount();

console.log(account1.deposit(23));
console.log(account1.transactions);
console.log(account1.transactions[0]);


let account2 = bank.openAccount();
console.log(account2.transactions);
console.log(account2.deposit(666));
console.log(account2.transactions);
