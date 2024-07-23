'''
RESULT = 🟢 VERY EASY, ~8 mins

P
    INPUT = integer
    OUTPUT = sum of all multiple of 7 or 11 that are less than the argument.
        If a number is a multible of both 7 and 11, count it once only.
    REQS
        EX
            If arg is neg, return 0
    

    
E
    For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.


D
    ?
A
    Comprehension?
'''

def seven_eleven(integer):
    multiples_of_7_and_11 = {num
                             for num in range(0, integer)
                             if num % 7 == 0 or num % 11 == 0}
    return sum(multiples_of_7_and_11)

print(seven_eleven(10) == 7)
print(seven_eleven(11) == 7)
print(seven_eleven(12) == 18)
print(seven_eleven(25) == 75)
print(seven_eleven(100) == 1153)
print(seven_eleven(0) == 0)
print(seven_eleven(-100) == 0)