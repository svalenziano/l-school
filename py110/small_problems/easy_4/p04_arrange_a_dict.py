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
        - Helper function
            - return the dict value for the key
        - Main func
            - Sort dict items (key, value) using the Helper function
            - return keys, using a comprehension
        - 

C


'''


def return_value_from_dict_items(item_tuple):
    return item_tuple[1]  # Return the 2nd value (the value)

def order_by_value(dict_):
    tuples = sorted(list(dict_.items()), key = return_value_from_dict_items)
    return [key for key, _ in tuples]

my_dict = {'p': 8, 'q': 2, 'r': 6}
keys = ['q', 'r', 'p']
print(order_by_value(my_dict) == keys)  # True

