'''
RESULT = 🟢 Done in 8.5 mins :)
    Easy all-around!

P
    input = string of digits
    output = number of even-numbered substrings
             where 'even numbered substring' is a substring that ends in an even number
E
D
    list of substrings
A
    Use comprehension to create list of substrings
        Filter: if index -1 of substring is an even number
    Return the number of substrings (length of list)
'''

def even_substrings(string):
    evens = [string[start_idx: end_idx]
             for start_idx in range(len(string))
             for end_idx in range(start_idx + 1, len(string) + 1)
             if string[end_idx - 1] in '02468']
    #print(evens)
    return len(evens)



print(even_substrings('1432') == 6)
print(even_substrings('3145926') == 16)
print(even_substrings('2718281') == 16)
print(even_substrings('13579') == 0)
print(even_substrings('143232') == 12)