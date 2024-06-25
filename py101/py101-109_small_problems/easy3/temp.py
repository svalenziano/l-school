x = ['a', 'b', 'c', 'd']

def mutate_list_o_strings(list_of_strings):
    for index, i in enumerate(list_of_strings):
        list_of_strings[index] = i.upper()

mutate_list_o_strings(x)

print(x)