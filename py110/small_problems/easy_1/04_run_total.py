'''
Problem
    Input - list of numbers
    Output - new list. same # of elements.  
        Each element = running total from orig list

Examples and test
    See below

Data structure:
    List

Alg
    - Initialize new empty list
    - For each element of the original list
        - Generate running total of all numbers up to and including that number
        - append that value to the new list
    - Return new list
'''

def running_total(list_of_nums):
    totals_list = []
    for idx, _ in enumerate(list_of_nums):
        totals_list.append(sum(list_of_nums[:idx + 1]))
    return totals_list



print(running_total([2, 5, 13]) == [2, 7, 20])    # True
print(running_total([14, 11, 7, 15, 20])
      == [14, 25, 32, 47, 67])                    # True
print(running_total([3]) == [3])                  # True
print(running_total([]) == [])                    # True