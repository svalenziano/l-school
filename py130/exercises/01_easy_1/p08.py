'''


Use a generator expression to yield each character of a string in reverse order.
'''


string = 'hello world!'

print(range(len(string) - 1, -1, -1))  # OMG duh, I was overthinking the indices

reverse_generator = (string[i] for i in range(len(string) - 1, -1, -1))

for char in reverse_generator:
    print(char)