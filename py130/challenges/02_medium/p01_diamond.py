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
    - Row 0 = one letter                width = 1   (1 + 2*0)  (1 + 2*row_num)
    - Row 1 = letter, space, letter     width = 3   (1 + 2*1)
    - Row 2 = letter, 3 spaces, letter  width = 5   (1 + 2*2)
    - Row 3 = letter. 5 spaces, letter  width = 7   (1 + 2*3)  (1 + 2 * (len()-1))
D
A
    v1 high level
    - Using `ord()` Build sequence of letters from A-? where ? is the argument letter
    - comprehension: Create a list of center_widths
        - center padding = 1 + 2 * row_num
    - Width = max center padding + 2 (1 for each letter)
    - Create an empty `result` list to hold the rows
    - zip the letters with the center width
    - For letter, center_padding in zip
        - If letter is A:
            - create a row with just 'A', padded appropriately using `str.cjust()`, with newline
        - Else:
            - create an f-string with center padding
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
        
        # line_length = Diamond.return_padded_length(letters)
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
        return len(letter_range) + (len(letter_range) - 1)

    
if __name__ == '__main__':
    for letter in ('ABCDE'):
        letter_range = Diamond.letter_range(letter)
        print(letter_range)
        pad = Diamond.return_padded_length(letter_range)
        for row in Diamond.make_diamond(letter):
            print(row.center(pad))