'''
P
    Input = string with zero or more parentheses
    Output = True or False: are all parentheses matched?
E
D
    Integers:
        count of left paren
        count of right parent
A

C

'''

def is_balanced_v01(string):
    return string.count('(') == string.count(')')



print(is_balanced("What (is) this?") == True)        # True
print(is_balanced("What is) this?") == False)        # True
print(is_balanced("What (is this?") == False)        # True
print(is_balanced("((What) (is this))?") == True)    # True
print(is_balanced("((What)) (is this))?") == False)  # True
print(is_balanced("Hey!") == True)                   # True
print(is_balanced(")Hey!(") == False)                # True
print(is_balanced("What ((is))) up(") == False)      # True