'''
P
    - input = string
    - output = true or false, parentheses are balanced
E
    see below
D
    - integer count
A
    - `unmatched` = 0
    - Parse string from left to right
    - If `)` is found before `(`, 
        - return False
    - If `(` is found, increment `un-closed`
    - If `)` is found and un-closed is greater than 0, 
        - decrement `un-closed`
    - return `unmatched` == 0
'''
# SV code
def is_balanced(string):
    unmatched = 0
    first_left_parenthesis_found = False
    last_found = ''
    for char in string:
        if not first_left_parenthesis_found and char == ')':
            return False
        if char == '(':
            unmatched += 1
            first_left_parenthesis_found = True
            last_found = char
        if char == ')':
            unmatched -= 1
            last_found = char
    if last_found == '(':
        return False
    return unmatched == 0


# LS tests
print(is_balanced("What (is) this?") == True)        # True
print(is_balanced("What is) this?") == False)        # True
print(is_balanced("What (is this?") == False)        # True
print(is_balanced("((What) (is this))?") == True)    # True
print(is_balanced("((What)) (is this))?") == False)  # True
print(is_balanced("Hey!") == True)                   # True
print(is_balanced(")Hey!(") == False)                # True
print(is_balanced("What ((is))) up(") == False)      # True