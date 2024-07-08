'''
P
    INPUT: string
    RETURN: list of substrings, each beginnning w the first letter of the word
E
D
A
C
'''

def leading_substrings(string):
    return [string[:length + 1] for length in range(0, len(string))]



# All of these examples should print True
print(leading_substrings('abc') == ['a', 'ab', 'abc'])
print(leading_substrings('a') == ['a'])
print(leading_substrings('xyzy') == ['x', 'xy', 'xyz', 'xyzy'])