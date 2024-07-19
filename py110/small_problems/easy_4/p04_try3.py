'''
P
    INPUT = DICT
    OUTPUT = LIST OF KEYS, SORTED BY VALUE

E
D
A
    v1
        For key, value in my_dict
        Sort using key, my_dict.get ?
C
'''

def order_by_value(my_dict):
    return sorted(list(my_dict.keys()), key=my_dict.get)


my_dict = {'p': 8, 'q': 2, 'r': 6}
keys = ['q', 'r', 'p']
print(order_by_value(my_dict) == keys)  # True