'''


Use nested generator expressions to create a flat list of numbers from a list of lists.
'''

lst_o_lsts = [[1,2,3], [4,5], [6,7,8]]
print(lst_o_lsts)

flattened = list((num
             for sublist in lst_o_lsts
             for num in sublist)
)

print(flattened)