function makeAccount(acctNumber) {
  let balance = 0;
  let transactions = [];

  let account = {

    pushTransaction(type, amount) {
      transactions.push({
        type,
        amount,
      })
    },

    printTransactions() {
      console.log(`\nTransactions for ${acctNumber}:`)
      console.log(transactions);
    },

    printBalance() {
      console.log(`Balance for account #${acctNumber} is ${balance}.`)
    },

    getBalance() {
      return balance;
    },

    deposit(amount) {
      balance += amount;
      this.pushTransaction('deposit', amount);
      return amount;
    },

    withdraw(amount) {
      if (this.getBalance() < amount) {
        amount = this.getBalance();
      }
      balance -= amount;
      this.pushTransaction('withdrawal', amount);
      return amount;
    },

    logTransaction() {
      console.log()
    },
  }

  return account;
}

function makeBank() {
  let accounts = [];
  return {
    nextAccountNum: 101,

    openAccount() {
      let a = makeAccount(this.nextAccountNum);
      accounts.push(a);
      console.log("Created account #", this.nextAccountNum);
      this.nextAccountNum += 1;
      return a;
    },

    transfer(src, destination, amt) {
      destination.deposit(src.withdraw(amt));
      console.log(`Withdrew ${amt} from ${src.getBalance()} and deposited into ${destination.getBalance()}`);
      return amt;
    },
  }
}

let bank = makeBank();

let account1 = bank.openAccount();

console.log(account1.deposit(23));
account1.printTransactions();


let account2 = bank.openAccount();
account2.printTransactions();
console.log(account2.deposit(666));
account2.printTransactions();

bank.transfer(account2, account1, 500);
account1.getBalance();
account2.getBalance();
