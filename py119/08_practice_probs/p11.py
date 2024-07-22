'''
RESULT = 🟡 DONE IN 29 MINS.  
            Good news: didn't have much trouble.  Adapted to surprises gracefully
            Bad news: it was complicated, and it took me a while.  Maybe
                there was a much simpler way?
            
P
    INPUT = non-empty string `s`
    OUTPUT = tuple = (str, int) =  `s == str * int`
E
D
    ?
A
    v1 high level
    new list = Find every substring
    new list of counts = Count every substring
    If max count is more than one:
        determine if that substring can be multiplied to equal the full string
    Otherwise:
        return (full string, 1)

    v1 low level
    new list of tuples = (every substring, counts of that substring)
    If max count is more than one:
        Sort substrings tuples by count, descending
        Sort by length, descending
        Operate on the 0th element:
            determine if that substring can be multiplied to equal the full string
    Otherwise:
        return (full string, 1)
'''

def return_2nd(tup):
    return tup[1]

def return_length_of_first(tup):
    return len(tup[0])

def can_be_multiplied(tup, string):
    '''
    Input = (substring, count)
        string = parent string
    Output = bool
    Alg 
        do the math
    '''
    substring, count = tup
    return substring * count == string

def repeated_substring(string):
    substrings = {string[start_idx: end_idx]
                  for start_idx in range(len(string))
                  for end_idx in range(start_idx + 1, len(string) + 1)}  
    counts = [(substr, int(string.count(substr)))
              for substr in substrings]

    counts.sort(key=return_length_of_first, reverse=True)
    counts.sort(key=return_2nd, reverse=True)

    if can_be_multiplied(counts[0], string):
        return counts[0]
    return (string, 1)


#repeated_substring('xyxy')
print(repeated_substring('superduper'))




print(repeated_substring('xyzxyzxyz') == ('xyz', 3))
print(repeated_substring('xyxy') == ('xy', 2))
print(repeated_substring('xyz') == ('xyz', 1))
print(repeated_substring('aaaaaaaa') == ('a', 8))
print(repeated_substring('superduper') == ('superduper', 1))