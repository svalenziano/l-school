'''
The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

    The first row contains one 'A'.
    The last row contains one 'A'.
    All rows, except the first and last, have exactly two identical letters.
    The diamond is horizontally symmetric.
    The diamond is vertically symmetric.
    The diamond has a square shape (width equals height).
    The letters form a diamond shape.
    The top half has the letters in ascending order.
    The bottom half has the letters in descending order.
    The four corners (containing the spaces) are triangles.

P
    Reqs
    Implicit
        - 1st and last rows have one letter, all others have two, separated by spaces
        
E
    - Row 0 = one letter
    - Row 1 = letter, space, letter
    - Row 2 = letter, 3 spaces, letter
    - Row 3 = letter. 5 spaces, letter
D
A
    v1 high level
    - Using `ord()` Build sequence of letters from A-? where ? is the argument letter
    - Determine the padding amount:
        - if the sequence length is 1, it's 1
        - else:
            - it's sequence length plus 2 (one letter at beginning and end of row)
    - Use `enumerate` to associate a number with each letter, starting with 0
    - Create an empty `result` list to hold the rows
    - For each letter:
        - If letter is A:
            - create a row with just 'A', padded appropriately using `str.cjust()`, with newline
        - Else:
            - create a row with 2 letters middle spaced (using idx provided by enumerate) and the appropriate padding, with newline
    - Copy the `result` list to a reversed list
    - Pop & discard the first element (so that the middle row isn't duplicated)
    - While the list still has elements
        - Pop the 0th row off the list and append it to `result`
    - Return `result`

    v1 extracted?
    - LETTER_RANGE
    - DIAMOND_PADDING
    - HALF_DIAMOND
'''

class Diamond:
    
    @classmethod
    def make_diamond(self, max_letter:str):
        letters = Diamond.letter_range(max_letter)
        line_length = Diamond.return_padded_length(letters)
        result = []
        for middle_space, letter in enumerate(letters):
            if letter == 'A':
                result.append('A\n'.center(line_length))
            else:
                string = f"{letter}{' ' * middle_space}{letter}"
                result.append(string.center(line_length))
        return result
        
            

    @classmethod
    def letter_range(cls, max_letter:str):
        min = ord('A')
        max = ord(max_letter) + 1
        ascii_code_points = range(min, max)
        characters = ''.join(chr(code_point)
                        for code_point in ascii_code_points)
        return characters
    
    @classmethod
    def return_padded_length(cls, letter_range:str):
        f'''
        Expected input: string output from the {cls.letter_range} method
        '''
        QTY_OF_BEGINNING_AND_END_CHARS = 2
        if letter_range == 'A':
            return 1
        else:
            return len(letter_range) + QTY_OF_BEGINNING_AND_END_CHARS 

    
if __name__ == '__main__':
    for letter in ('ABCDE'):
        # letter_range = Diamond.letter_range(letter)
        # print(letter_range)
        # print(Diamond.return_padded_length(letter_range))
        print(Diamond.make_diamond(letter))