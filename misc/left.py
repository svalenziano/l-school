from pprint import pp

my_dict = {
    'a' : {1, 2, 3, 4},
    'b' : {4, 5, 6, 7},
}

my_other_dict = {
    'a' : {'a', 'b', 'c'},
    'b' : {1, 2, 3},
}

def union_dict_sets(dict_to_mutate, other_dict):
    '''
    Input = dicts, all values must be a single set
    '''
    for key in dict_to_mutate.keys():
        dict_to_mutate[key] |= other_dict[key]

pp(my_dict)
union_dict_sets(my_dict, my_other_dict)
pp(my_dict)

