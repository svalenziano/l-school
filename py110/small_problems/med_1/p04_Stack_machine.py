'''
SCRATCH:
    stack
    stack and register
    register = current value

    EXAMPLE:
        stack = [3, 6, 4]  # 4 is topmost item in stack
        register = 7
        
        MULT: pops the 4, multiplies with 7, result of 28 is left in register
        stack = [3, 6]
        register = 28

        MULT: pops the 6, multiplies 6 with 28
        stack = [3]
        register = 168


P
    - Integers ONLY!  Div = floor division
    - 'Programs' supplied via a string argument
E
D
A
C





'''

def minilang(string):
    stack = []
    register = 0