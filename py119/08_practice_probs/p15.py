'''
RESULT = 🟢 14.5 mins, pretty easy :)


P
    input = string
    output = greatest product of four consecutive digits
    reqs
        ex
            arg will always have more than 4 digits
        imp
E

D
    list of products
A
    Create list of all possible substrings of length 4
    Create list of products
    Return max product

    [HELPER] products
    INPUT = STRING
    OUTPUT = product
    Alg:
        - split string into list of ints (comprehension)
        - calc product using for loop
        - return product
'''

def return_string_product(string):
    nums = [int(char) for char in string]
    product = 1
    for num in nums:
        product *= num
    return product

def greatest_product(string):
    substrings = [string[start_idx: start_idx + 4]
                  for start_idx in range(len(string) - 3)]
    products = [return_string_product(substring)
                for substring in substrings]
    return max(products)


def ls():
    print(greatest_product('23456') == 360)      # 3 * 4 * 5 * 6
    print(greatest_product('3145926') == 540)    # 5 * 9 * 2 * 6
    print(greatest_product('1828172') == 128)    # 1 * 8 * 2 * 8
    print(greatest_product('123987654') == 3024) # 9 * 8 * 7 * 6

ls()