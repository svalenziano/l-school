def make_adders(n):
    for i in range(n):
        def adder(x):
            return i + x

        return adder

adders = make_adders(3)

add1, add2, add3 = adders

print(add1(10))  # Output: 11
print(add2(10))  # Output: 12
print(add3(10))  # Output: 13
print(add3.__closure__)  # (<cell at 0x7f1a7540fdf0: int object at 0x7f1a75508130>,)