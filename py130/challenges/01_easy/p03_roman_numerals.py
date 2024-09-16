'''
Write some code that converts modern decimal numbers into their Roman number equivalents.

 
 http://www.novaroma.org/via_romana/numbers.html

 - I = 1
 - V = 5
 - X = 10
 - L = 50
 - C = 100
 - D = 500
 - M = 1000

 - Placing any smaller number in front of any larger number indicates subtraction
    - For example, IV means 4, XL means 40, XC means 90, CD means 400

Let's do some tests:
2024 = MMXXIV

'''

class RomanNumeral:
    def __init__(self, decimal_value):
        self._decimal_value = decimal_value
    
    def __str__(self):
        return str(self._decimal_value)

    def to_roman(self):
        '''
        P
        E
        D
        A
            v1 high level:
                - Given these dicts:
                    - numerals_core:
                        1: 'I',
                        5: 'V',
                        10: 'X',
                    - numerals_derived:
                        4: 'IV'
                        9: 'IX',
                        40: 'XL'
                    - numerals_combined = numerals_core | numerals_derived
                MAIN
                - numerals = []  (use a list so it's easy to distinguish between appends)
                - Convert to string and process each character?
                - `length = number of 'digits'
                - For each character (numbers place)
                    - convert it to a decimal value.
                        - 1 could equal 1, 10, 100, etc.
                        - HELPER: DISSECT_NUMBER
                    - HELPER: CONVERT_PLACE_TO_ROMAN
                    - Append the roman numerals to `numerals`
                - join numerals and return a string value
                
                CONVERT_PLACE_TO_ROMAN
                - convert character to integer
                - if integer is equal to one of the numerals_combined keys:
                    - return the value of that key
                - elif the integer is a multiple of any of the numerals_core keys:
                    - Divide to determine how many numerals should be used
                        - ie, 30 = 3 * 'X'
                    - Return the roman numerals, ie 'XX' or 'XXX'

                

            v2 high level:
                - Given this dict:
                    1: 'I',
                    5: 'V',
                    10: 'X',
                    ...
                - For each key:
                    - Use Divmod to determine how many times the key (the decimal value) can go into the 
                    oops, don't think this is gonna work

            v3 high level
        '''
        r_nums_core = {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M',
        }

        r_nums_core_sorted = sorted(r_nums_core.keys(), reverse=True)

        r_nums_derived = {
            2: 'II',
            3: 'III',
            4: 'IV',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            40: 'XL',
            90: 'XC',
            400: 'CD',
            900: 'CM',
        }

        r_nums_combined = r_nums_core | r_nums_derived

        def convert_digit_to_roman(digit, tens_place):
            if not 0 <= digit <= 9:
                raise ValueError('`digit` must be between +1 and +9, inclusive.')
            if digit == 0:
                raise ValueError('The romans had no digit for zero')
            if not tens_place % 10 == 0:
                raise ValueError(f"{tens_place.__name__} must be a FACTOR of ten.")
            decimal_value = digit * (tens_place or 1)
            if decimal_value in r_nums_combined.keys():
                return r_nums_combined[decimal_value]
            for n in r_nums_core_sorted:
                if decimal_value % n == 0:
                    return r_nums_core[n] * (decimal_value // n)

            raise ValueError('No solution was found')


        return convert_digit_to_roman(self._decimal_value, 10)

    

if __name__ == '__main__':
    for num in range(1,10):
        num = RomanNumeral(num)
        print(f"{num} --> {num.to_roman()}")