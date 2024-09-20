'''
Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:

    012
    123
    234

Likewise, here are the 4-digit series:

    0123
    1234

Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.
'''

class Series:
    def __init__(self, num:str):
        '''
        INPUT: Numeric string
        ALGO
            typecheck
        '''
        pass

    def slices(self, length:int):
        '''
        INPUT: Integer = length of slice
        OUTPUT: List of list of integers
            List of all possible CONSECUTIVE slices of the string.  Each 'slice'
                is a list of integers.
            If `length` is equal to len(string), return a single slice, equivalent to the string
            Raise ValueError if `length` is greater than the length of the string
        ALGO:
            Check length and raise ValueError if appropriate
            Return nested comprehension
        '''
        pass

if __name__ == '__main__':
    pass