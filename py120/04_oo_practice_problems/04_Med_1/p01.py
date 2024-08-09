class BankAccount:
    def __init__(self, starting_balance):
        self._balance = starting_balance

    def balance_is_positive(self):
        return self.balance > 0

    @property
    def balance(self):
        return self._balance
    

'''
My answer:
Alyssa is correct, `self.balance` on line 6 will utilize the `balance` property 
on line 9, which returns the instance variable `_balance` on line 10.
'''