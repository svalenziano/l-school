'''
RESULT = 🟢 15 MINS, PRETTY EASY!  
                1) I examined the test cases in the REPL, which
                informed my data structure and algorithm.
                2) I kept my algorithm high level
                
P
    INPUT = list of ints
    OUTPUT = integer = index N
                Sum of nums greater than index N is equal to sum of
                nums less than index N
    REQ
        EX
            Multiple answers? return smallest value
            Sum of nums left of index 0 is 0.
            Sum of nums right of last index is also 0.
        IMPL
            Don't include the value at the index in any calcs.
E
    print(equal_sum_index([1, 2, 4, 4, 2, 3, 2]) == 3)
        sum([1,2,4]) == sum([2,3,2])
        Num at index 3 (in this case: 4) is omitted/ignored
D
    2 lists?
A
    v1 high
    - for each possible `split_indexes`, create tuple containing 2 lists and an index:
        (left_list, right_list, idx)
    - working left to right, determine which, if any of those combos results in 
        equality between the sums of the lists
    - if yes, return the index
    - if not, return -1

'''
def equal_sum_index(lst:list):
    combos = [(idx, lst[0:idx], lst[idx + 1:])
                 for idx in range(len(lst))]
    for idx, left, right in combos:
        if sum(left) == sum(right):
            return idx
    else:
        return -1




def ls():
    print(equal_sum_index([1, 2, 4, 4, 2, 3, 2]) == 3)
    print(equal_sum_index([7, 99, 51, -48, 0, 4]) == 1)
    print(equal_sum_index([17, 20, 5, -60, 10, 25]) == 0)
    print(equal_sum_index([0, 2, 4, 4, 2, 3, 2]) == -1)

    # The following test case could return 0 or 3. Since we're
    # supposed to return the smallest correct index, the correct
    # return value is 0.
    print(equal_sum_index([0, 20, 10, -60, 5, 25]) == 0)
ls()