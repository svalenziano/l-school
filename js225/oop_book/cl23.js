/* 
TODO
- private fields: balance
- private method: checkBalance
- public methods: deposit, withdraw.  
  - Raise RangeError if insufficient funds for withdrawal
*/

// my solve
class BankAccount {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  #checkBalance() {
    console.log(this.#balance);
  }

  deposit(amt) {
    this.#balance += amt;
    this.#checkBalance();
  }

  withdraw(amt) {
    if (amt > this.#balance) {
      throw new RangeError('Insufficient funds :(');
    } else {
      this.#balance -= amt;
      this.#checkBalance();
    }
  }


}

// TESTS
let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds





