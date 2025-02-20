'''
Write a function that accepts a string and outputs a list of strings.  
The first string should be the concatenation of the first and last
letter of the string.  Each subsequent string should 'move inwards' towards
the center of the string.  

See the tests for more context and ask questions as necessary.
'''

'''
SV
EXPLORING THE PROBLEM
1st char index = 0 thru midpoint (step forwards)
2nd char index = -1 thru midpoint (step backwards)
    2nd char index is 1st char index * -1, minus 1
Num iterations = range(0, midpoint + 1)
---
What's the midpoint? For 'abc' it's 'b' --> [1] or [-2] ... 
    len(string) = 3 / 2 = 1.5 --> 1
                  3 // 2 = 1
---
CONCLUSION: DETERMINE MIDPOINT VIA FLOOR DIVISION OF len(string)
---
How do we avoid adding the middle letter?
    We only have a middle letter **IF** the string has an odd number of characters
    Get index of middle character
    If 1ST CHAR IDX is equal to MIDDLE CHAR IDX, APPEND ONLY that character
---

v1 high level algo
- CREATE EMPTY LIST
- MIDDLE_CHAR_INDX = len(string) // 2
- FOR 1ST_CHAR_IDX in range of indexes between 0 and the midpoint (+1):
    - IF the string's length is odd:   (ARE WE AT MIDDLE INDEX!?!?)
        - If 1ST CHAR IDX is equal to MIDDLE CHAR IDX
            - APPEND ONLY that character 
    - ELSE:
        - 2ND_CHAR_IDX = (1ST_CHAR_IDX * -1) - 1
        - APPEND string[1ST_CHAR_IDX] + string[2ND_CHAR_IDX]

'''
# CODE ATTEMPT 1
# lst = []
# middle_char_idx = len(string) // 2
# for first_char_idx in range(0, middle_char_idx + 1):
#     if len(string) % 2 == 1:
#         if first_char_idx == middle_char_idx:
#             lst.append(string[middle_char_idx])
#         else:
#             second_char_idx = (first_char_idx * -1) -1
#             lst.append(string[first_char_idx] + string[second_char_idx])
# print(lst)
'''
UH OH, V1 ALGO TURNED OUT TO BE PROBLEMATIC

v2 high level algo
For each 'first_character'
    If we're at the middle character
        Append the middle character (just one, not two)
    Else
        Append the concatenation of the first character with the 2nd character

v3 high level
Create list of first and 2nd chars
If the length of the string is odd
    replace the last list element with the middle character

V3 LOW LEVEL
- HELPER
    - FINDING THE MIDPOINT
        - 
- MAIN FUNC
    - CREATE EMPTY LIST
    - FOR 1ST_CHAR_IDX in range of indexes between 0 and the midpoint (+1):
        - 2ND_CHAR_IDX = (1ST_CHAR_IDX * -1) - 1
        - APPEND string[1ST_CHAR_IDX] + string[2ND_CHAR_IDX]
'''

# CODE ATTEMPT 2
def either_end(string):
    lst = []
    middle_char_idx = (len(string) - 1 ) // 2
    for first_char_idx in range(0, middle_char_idx + 1):
        second_char_idx = (first_char_idx * -1) -1
        lst.append(string[first_char_idx] + string[second_char_idx])
    if len(string) % 2 == 1:
        lst[-1] = string[middle_char_idx]
    # print(lst)
    return lst



# TESTS
string = 'lorem ipsum'
print(either_end(string) == ['lm', 'ou', 'rs', 'ep', 'mi', ' '])

string = 'helloworld'
print(either_end(string) == ['hd', 'el', 'lr', 'lo', 'ow',])

string = '1234'
print(either_end(string) == ['14', '23'])

string = ''
print(either_end(string) == [])