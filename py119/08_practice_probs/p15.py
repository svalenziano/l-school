'''
RESULT: 🔴 I thought it would be easy, but it turned into a train wreck. 
            Aborted at 24 mins.


P
    INPUT = string, numeric digits only, minimum length = 5
    OUTPUT = integer, greatest product of four consecutive digits in the string
    REQ
E
    '23456', len = 5
    ['2345' , '3456']
    start = 0, 1
    end = 3, 4
    start of 1 --> end of 5
D
A
    Get all possible strings (use comprehension)
    Create list of sums of all those strings (comprehension)
    Return the max sum    
'''

def greatest_product(string):
    LENGTH = 4
    substrings = [list(string[start_idx: end_idx])
                  for start_idx in range(len(string) - LENGTH + 1)
                  for end_idx in range(start_idx + LENGTH, len(string) + 1)
                  if end_idx - start_idx == 4]
    integers = [int(digit)
                for sublist in substrings
                for digit in sublist]
    print(integers)




print(greatest_product('23456') == 360)      # 3 * 4 * 5 * 6
print(greatest_product('3145926') == 540)    # 5 * 9 * 2 * 6
print(greatest_product('1828172') == 128)    # 1 * 8 * 2 * 8
print(greatest_product('123987654') == 3024) # 9 * 8 * 7 * 6



