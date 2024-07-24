'''
RESULT = 🟢 Try 2, easy, 12 mins :)

P
    INPUT = list of ints
    OUTPUT = tuple of 2 nums that are closest together in value
              return lowest-index tuple if there's a tie
E
D
    list of tuples
A
    v1
    Make list of every possible number pair (a left number and a right number)
    Make a list of sums: one sum for each pair of nums
    Return the minimum sum

    v2
    Make list of every possible number pair (a left number and a right number)
    Sort pairs by the absolute value of their difference
    Return the minimum sum
'''

def diff_absolute_value(pair):
    left, right = pair
    return abs(left - right)

def closest_numbers(lst):
    pairs = [(lst[left_idx], lst[right_idx])
             for left_idx in range(len(lst))   # omit last index
             for right_idx in range(left_idx + 1, len(lst))]
    pairs.sort(key=diff_absolute_value)
    return pairs[0]


print(closest_numbers([5, 25, 15, 11, 20]) == (15, 11))
print(closest_numbers([19, 25, 32, 4, 27, 16]) == (25, 27))
print(closest_numbers([12, 22, 7, 17]) == (12, 7))