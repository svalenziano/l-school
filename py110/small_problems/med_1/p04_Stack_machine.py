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

'''
MINILANG PEDAC
P
    Input = valid string.  No error-checking necessary
    Output = Print, where commands/operations/tokens dictate
E
D
    stack = list
    register = integer
A
    - Convert string to list of commands
        - For each command
            - if Command is integer:
                - reassign register to value of integer
            - else:
                - run matching command using eval()
C

'''
def minilang(string):

    def print_2():
        print(register[0])

    def push():
        stack.append(register[0])
    
    def add():
        register.append(register.pop() + stack.pop())

    def sub():
        register.append(register.pop() - stack.pop())

    def mult():
        register.append(register.pop() * stack.pop())

    def div():
        register.append(register.pop() // stack.pop())

    def remainder():
        register.append(register.pop() % stack.pop())

    def pop():
        register.append(register.pop())

    stack = []
    register = [0]
    commands = string.lower().split()
    for command in commands:
        if command.strip('-').isdigit():
            register.clear()
            register.append(int(command))
        else:
            command = 'print_2' if command == 'print' else command
            eval(f"{command.lower()}()")



minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT')
# 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8

minilang('6 PUSH')
# (nothing is printed)