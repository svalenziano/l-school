# My Code



# LS Tests
'''
Implement a Wallet class that represents a wallet with a certain amount of money. You want to be able to combine (add) two wallets together to get a new wallet with the combined total amount from both wallets.
'''
wallet1 = Wallet(50)
wallet2 = Wallet(30)
merged_wallet = wallet1 + wallet2
print(merged_wallet.amount == 80)       # True