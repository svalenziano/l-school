bill_value = float(input("What is the bill? "))
tip_percentage = float(input("What % do you wish to tip? ")) / 100

print()

tip = bill_value * tip_percentage
total = tip + bill_value

print(f"The {tip_percentage*100}% tip is ${tip:,.2f}")
print(f"Your total cost (bill + tip) is ${total:,.2f}")