'''
RESULT = 🟢🟢 Super easy, took less than 5 mins
P
    INPUT = list of nums
    OUTPUT = the number that differs from all the rest
E
D
    list
A

'''
def what_is_different(lst):
    count_of_one = [num
                    for num in lst
                    if lst.count(num) == 1]
    return count_of_one[0]




print(what_is_different([0, 1, 0]) == 1)
print(what_is_different([7, 7, 7, 7.7, 7]) == 7.7)
print(what_is_different([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) == 11)
print(what_is_different([3, 4, 4, 4]) == 3)
print(what_is_different([4, 4, 4, 3]) == 3)