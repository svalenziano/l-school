'''
RESULT = 🟢 Super easy, done in 5 mins

P
    INPUT = list of ints
    OUTPUT = the int that appears an odd num of times
    REQS
        Ex
            Only one such integer in the list at any time
E
D
    Just a list?
A
    List comprehension:
        num
        for num in lst
        if lst.count(num) % 2 == 1
    Return index 0 of the resulting list
'''

def odd_fellow(lst):
    fellows = [num
               for num in lst
               if lst.count(num) % 2 == 1]
    return fellows[0]



print(odd_fellow([4]) == 4)
print(odd_fellow([7, 99, 7, 51, 99]) == 51)
print(odd_fellow([7, 99, 7, 51, 99, 7, 51]) == 7)
print(odd_fellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) == -6)
print(odd_fellow([0, 0, 0]) == 0)