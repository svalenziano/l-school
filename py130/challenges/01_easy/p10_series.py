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

import tomllib

class Series:
    
    with open("p10.toml", 'rb') as f:
        MESSAGES = tomllib.load(f)
    
    def __init__(self, numeric_string:str):
        '''
        INPUT: Numeric string
        ALGO
            typecheck
        '''
        if not isinstance(numeric_string, str):
            raise TypeError(self.MESSAGES['error_numeric_str'])
        
        try:
            int(numeric_string)
        except ValueError:
            raise ValueError(self.MESSAGES['error_numeric_str'])
        
        self._numeric_string = numeric_string

    def slices(self, slice_length:int):
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
        nums = [int(digit) for digit in self._numeric_string]

        if slice_length > len(nums):
            raise ValueError(self.MESSAGES['error_over_length'])
        
        return [nums[start_idx: start_idx + slice_length]
                for start_idx in range(len(nums) - slice_length + 1)]


if __name__ == '__main__':
    # Series('1234')
    # Series('abcd')  # should 
    pass