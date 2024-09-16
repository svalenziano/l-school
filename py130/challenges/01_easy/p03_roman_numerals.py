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
2999 = MMCMXCIX
    v2
    - use all numerals in one dict
        - I = 1
        - V = 5
        - IX = 9
        - X = 10
        - XL = 40
        - L = 50
        - XC = 90
        - C = 100
        - CD = 400
        - D = 500
        - CM = 900
        - M = 1000
    - for each roman numeral, starting with thousands
        - determine how many times the number can be divided by the numerals' value (using divmod)
        - append the roman numerals to the result, ie 2000 = 2 * 'M' = 'MM'
        - reassign `number` to `remainder`
    - return result


RESULTS: 

LESSONS LEARNED:
- Don't skimp on creating your own tests to visualize the problem!!! My previous solutions skimped on that aspect, and as a result my solutions were WAYYYYYYY more complicated than they needed to be.  Why?  I didn't fully understand the problem, or how simple the algorithm could be!
- Wow.

'''

class RomanNumeral:
    def __init__(self, decimal_value):
        self._decimal_value = decimal_value
    
    def __str__(self):
        return str(self._decimal_value)

    def to_roman(self):
        
        NUMERALS = {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M',
        }

        NUMS_SORTED = sorted(NUMERALS, reverse=True)

        result = ''
        value_to_process = self._decimal_value
        for n in NUMS_SORTED:
            divisible, remainder = divmod(value_to_process, n)
            if divisible:
                roman_numeral = NUMERALS[n]
                result +=  roman_numeral * divisible
                value_to_process = remainder
        return result


if __name__ == '__main__':
    for num in range(1,1000,13):
        num = RomanNumeral(num)
        print(f"{num} --> {num.to_roman()}")