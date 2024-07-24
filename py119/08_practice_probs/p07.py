'''
RESULT = 🟢  Not bad!  ~10 mins (forgot to time)
            Should have QC'ed my Algorithm against my requirements, but figured it out!
P
    INPUT = list of integers
    OUTPUT = integer; num of identical pairs of ints in that list
    REQS
        EX
            Identical pair = two integers that are equal
        IMPL
            Number of pairs = number of singles // 2
E

D
    NO >>>  set of pairs?  NO > WON'T COUNT if there's >1 pair of a single num
    
    YES >>> dict of count_of_pairs
A
    v1 high level
    - create a dictionary:
        key = integer
        value = count of that int in the original list
    - return sum
'''

def pairs(lst):
    count_of_pairs = {num: lst.count(num) // 2
              for num in lst}
    return sum(count_of_pairs.values())


def ls():
    print(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) == 3)
    print(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) == 4)
    print(pairs([]) == 0)
    print(pairs([23]) == 0)
    print(pairs([997, 997]) == 1)
    print(pairs([32, 32, 32]) == 1)
    print(pairs([7, 7, 7, 7, 7, 7, 7]) == 3)

ls()