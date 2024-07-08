'''
P
    - Input = list of ints from zero to nineteen
    - Output = sorted list of ints, sorted by string value
E

D

A
    - HELPER FUNCTION
        - Input = integer
        - Output = english word for that integer
        - Alg:
            return dict_o_nums[integer]

    - MAIN FUNCTION
        - sort list by value of HELPER FUNCTION
        - return list


C
'''
def return_dict_o_nums():
    list_o_nums = [
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

    return {num: list_o_nums[num] for num in range(20)}


def num_to_word(integer):
    dict_o_nums = return_dict_o_nums()
    return dict_o_nums[integer]

def alphabetic_number_sort(lst):
    return sorted(lst, key = num_to_word)



'''
LS TESTS:
'''

input_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
              10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

expected_result = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1,
                   7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

print(alphabetic_number_sort(input_list) == expected_result)
# Prints True