'''
P
    Input = list of strings
    Output = print output.  `string ==> number of occurences'

E


D
    Data = dict

A
    - Create set from 'vehicles'
    - Dict comprehension:
        - {string : string count for string in set}
    - print dict

C


'''

def count_occurrences(list_):
    set_ = set(list_)
    count_dict =  {string: list_.count(string) for string in set_}
    for string, count in count_dict.items():
        print(f"{string} => {count}")


vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
            'motorcycle', 'motorcycle', 'car', 'truck']

count_occurrences(vehicles)