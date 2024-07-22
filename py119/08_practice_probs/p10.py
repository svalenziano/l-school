'''
RESULT = 🟡 THIS PROBLEM WAS EASY, done in 15 mins, **EXCEPT** THAT I had trouble with the
            `all_substrings` function which I troubleshot in a hack and slash manner

P
    INPUT = string
    OUTPUT = integer = count of 'even numbered substrings'
    REQS
        EX
            Characters may be used in more than one substring
        IMPL
            An 'even numbered substring' is a string of digits that is one 
            or more digits long, the last of which is an even number
E
D
    list of 'even substrings'
A
    result = []
    Get all possible substrings
    For each substring, if last digit is even, add to `result`
    return result
'''

def all_substrings(string):
    return [string[start_idx: end_idx]
            for start_idx in range(len(string))
            for end_idx in range(start_idx + 1, len(string) + 1)]

def even_substrings(string):
    substrings = all_substrings(string)
    evens = [substr
             for substr in substrings
             if substr and substr[-1] in '02468']
    print(substrings)
    #print(evens); print(len(evens))
    return len(evens)

#print(all_substrings('1432'))




def ls():
    print(even_substrings('1432') == 6)
    print(even_substrings('3145926') == 16)
    print(even_substrings('2718281') == 16)
    print(even_substrings('13579') == 0)
    print(even_substrings('143232') == 12)
ls()