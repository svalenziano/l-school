'''
P
    INPUT = list of ints btw 0 and 19 
    OUTPUT = list sorted by english word for that num
    REQ
        EX
        IMP
E
D
A
    - [HELPER]
        -input = integer
        -output = english word
        - alg
            - index lookup, return
    - return new list sorted as english words
C
'''

def convert_to_word(num):
    words = [
        'zero', 
        'one', 
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine', 
        'ten', 
        'eleven', 
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]
    return words[num]

def alphabetic_number_sort(lst):
    return sorted(lst, key=convert_to_word)
    

input_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
              10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

expected_result = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1,
                   7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

print(alphabetic_number_sort(input_list) == expected_result)
# Prints True