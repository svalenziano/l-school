'''
RESULT = 🟡 Fine in 14 mins.
          Had some trouble with start and stop indexes for the `sublists_of_5` comprehension.
          This stuff is still tricky!
          Writing my own test cases probably would have helped!

P
    intput = list of ints
    output = integer if 5 elements or more
             None if fewer than 5 elements
             Min sum of 5 consecutive nums in the list
E

D
    lst of lists?
A
    if fewer than 5, return None
    otherwise
        create list of all sublists of length 5
        create list of sums (of all sublists)
        return minimum sum
'''

def minimum_sum(lst):
    if len(lst) < 5:
        return None
    sublists_of_5 = [lst[start_idx: start_idx + 5]
                     for start_idx in range(len(lst) - 4)]
    sums = [sum(sublist)
            for sublist in sublists_of_5]
    return min(sums)




def ls():
    print(minimum_sum([1, 2, 3, 4]) is None)
    print(minimum_sum([1, 2, 3, 4, 5, -5]) == 9)
    print(minimum_sum([1, 2, 3, 4, 5, 6]) == 15)
    print(minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16)
    print(minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10)

ls()