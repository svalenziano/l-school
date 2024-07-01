my_dict = {
    'a' : {1, 2, 3, 4},
    'b' : {4, 5, 6, 7},
}

# this doesn't do anything.  Returns a new object, doesn't mutate!
my_dict['a'].union({10, 11, 12}); print(my_dict)

# this works
my_dict['a'] = my_dict['a'].union({10, 11, 12}); print(my_dict)

# this works too
my_dict['a'] = my_dict['a'] | my_dict['b']; print(my_dict)