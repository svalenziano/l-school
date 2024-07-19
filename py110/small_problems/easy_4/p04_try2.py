'''
P
    INPUT = dictionary
    OUTPUT = list of keys, sorted by values associated w each key
E
D
    lst?
A
    v1
        - [HELPER]
            - input ?
            - output = return value of dict key
            - PROBLEM: not sure how to access the values from within a `sorted()` function?
        - create list of dict keys

        - use sorted() to 
    v2
        - [HELPER]
            - input =
                - dict
                - dict value
            - output = dict key
            - create lists:
                keys
                values
            - get index of value in values list
            - return key using index
        - [MAIN FUNC]
            - create sorted list of dict values
            - for each list element
                - find dict key based on dict value
                - append to return list
            - return
C
'''
def get_key_from_value(my_dict, value):
    keys = list(my_dict.keys())
    values = list(my_dict.values())
    try:
        idx = values.index(value)
        return keys[idx]
    except:
        return

def order_by_value(my_dict):
    sorted_keys = []
    values = sorted(list(my_dict.values()))
    for value in values:
        key = get_key_from_value(my_dict, value)
        sorted_keys.append(key)
    return sorted_keys

my_dict = {'p': 8, 'q': 2, 'r': 6}
keys = ['q', 'r', 'p']


print(order_by_value(my_dict) == keys)  # True#