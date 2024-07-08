'''
P
    INPUT = dict
    OUTPUT = dict keys, sorted by the value associated with each key

E
D
A
    - OOPS THIS DOESN'T WORK BC YOU CAN'T PASS ARGUMENTS TO A SORT KEY
        - key_value(): (HELPER)
            - Input = dict, key
            - Return = value
        - Make a list of the dict keys
        - Sort the list by the value of each key
    - V2
        For key in dict.keys():
            
C


'''


def return_key_value(my_dict):
    return my_dict[key]

def order_by_value(dict_):
    dict_keys = list(my_dict.keys())
    return dict_keys.sorted(key = return_key_value(dict_, ))

my_dict = {'p': 8, 'q': 2, 'r': 6}
keys = ['q', 'r', 'p']
print(order_by_value(my_dict) == keys)  # True

