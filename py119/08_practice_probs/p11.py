'''
RESULT = 🟢 16 MINS
            Good!  Tested regularly, was able to handle errors pretty easily!

P
    INPUT = non empty string
    RETURN = tuple = (string, integer)
                string that can be repeated to form the whole word
                integer = number of times the string must be repeated to form the whole word
E

D
    list of substrings
A
    v1 high level
    [MAIN]
        - Comprehension: create list of all substrings
            - Filter: substring, when multiplied, equals parent string
        - Sort strings by length
        - Return shortest string
    is_divisible(parent_string, substring) [HELPER]
        - Use floor division to determine how many times the substring will go into the parent_string
        - Multiply the substring by that amount
        - test for equality between the parent string and the multiplied substring
        - return True or False 
'''

def return_length(string):
    return len(string)

def is_divisible(parent_string, substring):
    factor = len(parent_string) // len(substring)
    return parent_string == substring * factor

#print(is_divisible('abab', 'ab'))

def repeated_substring(string):
    children = {string[start_idx: end_idx]
                for start_idx in range(len(string))
                for end_idx in range(start_idx + 1, len(string) + 1)
                if is_divisible(string, string[start_idx: end_idx])}
    children = sorted(list(children), key=return_length)
    shortest_child = children[0]
    factor = len(string) / len(shortest_child)
    return (shortest_child, factor)

def ls():
    print(repeated_substring('xyzxyzxyz') == ('xyz', 3))
    print(repeated_substring('xyxy') == ('xy', 2))
    print(repeated_substring('xyz') == ('xyz', 1))
    print(repeated_substring('aaaaaaaa') == ('a', 8))
    print(repeated_substring('superduper') == ('superduper', 1))
ls()