'''


Use a generator expression to yield each character of a string in reverse order.
'''


string = 'hello world!'

start_idx = -1
end_idx = -len(string) - 1

backwards = (string[idx]
             for idx in range(start_idx, end_idx, -1))

print(list(backwards))

print(string[::-1])