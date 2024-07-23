'''
MODIFYING THE CODE AFTER GLANCING AT LS SOLUTION

REQS:
    CREATE NEW OBJECT, DON'T MUTATE

ALG
    RE
'''

# UPDATED BY SV
def dedup_list(lst):
    seen = []
    for ele in lst:
        if ele not in seen:
            seen.append(ele)
    return seen


data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]

cleaned_data = dedup_list(data)
print(cleaned_data == [4, 2, 1, 3]) # order not guaranteed



'''
# INITAL STATE
data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]
unique_data = list(set(data))
print(unique_data == [4, 2, 1, 3]) # order not guaranteed
'''