'''
RESULT = 🟡 10 mins, should have been REALLY easy but still having problems with 
            intuitively knowing what indexes to include
P
E
    length = 5
    'abcde'
     01234

D
A
'''



# working
def substrings(string):
    subs =  [string[start_idx: end_idx]
#    subs =  [print(start_idx,':',end_idx)
            for start_idx in range(len(string))
            for end_idx in range(start_idx + 1, len(string) + 1)]
    print(subs)
    return subs






expected_result = [
    "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e",
]

print(substrings('abcde') == expected_result)  # True