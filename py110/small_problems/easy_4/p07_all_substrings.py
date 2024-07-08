'''
P
    Input = string
    Output = list of all substrings
    Reqs:
        Explicit:
            - Order returned list by where inthe string the substring begins
            - 
E
D
A
    - while string length is greater than 0:
        - get all 'leading substrings'
        - reassign the string with slice syntax, removing the first letter
C
'''

def leading_substrings(string):
    return [string[:length + 1] for length in range(0, len(string))]

def substrings_v01(string):
    substring_list = []
    while len(string) > 0:
        substring_list.extend(leading_substrings(string))
        string = string[1:]
    return substring_list

# still confused by nested comprehensions 😭
def substrings(string):
    return [substring
            for idx in range(len(string))
            for substring in leading_substrings(string[idx:])]

if __name__ == '__main__':
    expected_result = [
        "a", "ab", "abc", "abcd", "abcde",
        "b", "bc", "bcd", "bcde",
        "c", "cd", "cde",
        "d", "de",
        "e",
    ]

    print(substrings('abcde') == expected_result)  # True