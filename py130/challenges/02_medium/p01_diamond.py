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
    - Row 2 = letter, two spaces, letter
    - Row 3 = letter. three spaces, letter
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
    
    def make_diamond(self, max_letter:str):
        self._max_letter = max_letter
    