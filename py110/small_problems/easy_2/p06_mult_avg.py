'''
Prob
    - Input: list of pos ints
    - Output: mult together, divite by # of entries in list, return result as string w value rounded to 3 decimals
    - Reqs
        -Ex
        -Im
E
D
    - None?
A
    - Mult all ints together
        - init 'product' at 1
        - For each int in list
            - mult product by int
        - return product
    - Divide product by length of list
    - Return string, rounded to 3 decimals
        - Convert to string using f-string, :.2 format

C
'''
def multiplicative_average(list_of_ints):
    product = 1
    for int_ in list_of_ints:
        product *= int_
    avg = product / len(list_of_ints)
    avg =  f"{avg:.3f}"
    return avg





# All of these examples should print True
print(multiplicative_average([3, 5]) == "7.500")
print(multiplicative_average([2, 5, 8]) == "26.667")
print(multiplicative_average([2, 5]) == "5.000")
print(multiplicative_average([1, 1, 1, 1]) == "0.250")
print(multiplicative_average([2, 5, 7, 11, 13, 17]) == "28361.667")