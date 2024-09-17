'''
Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0. Note that the only valid digits in an octal number are 0, 1, 2, 3, 4, 5, 6, and 7.

TEST NOTES
    - 6789 is invalid because some digits are greater than 7
    - abc1z is invalid because some chars are non-numeric
    - leading zeros are fine / shouldn't result in error

ALGO
    v1 high level
    - reverse the string and start at index 0 so you can work from right to left
    - octal_value = 0
    - TEST FOR INVALID CHARS?
    - add to octal_value: coerce character to integer, then multiply by 8^index 
        (10^0 = 1, 10^1 = 10, etc)
    - return octal_value

'''

class Octal:
    def __init__(self, value):
        self._value = value

    def to_decimal(self):
        if not Octal.is_valid(self._value):
            return 0
        decimal_value = 0
        reversed_value = self._value[::-1]
        for idx, digit in enumerate(reversed_value):
            decimal_value += int(digit) * (8 ^ idx)
        return decimal_value
        



    @classmethod
    def is_valid(self, number_to_test):
        number_to_test = str(number_to_test)
        for digit in number_to_test:
            if digit not in '01234567':
                return False
        return True
    
