messages = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    'last',
]

numbers = []

for message in messages:
    x = input(f"Enter the {message} number: ")
    numbers.append(x)

last = numbers[-1]
others = ','.join(numbers[:-1])

if last in others:
    print(f"{last} is in {others}.")
else:
    print(f"{last} isn't in {others}.")

    
