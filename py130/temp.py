def make_adder(n):
    def adder(x):
        return n + x

    return adder

adders = [make_adder(n) for n in range(1, 4)]

add1, add2, add3 = adders

print(add1(10))  # Output: 11
print(add2(10))  # Output: 12
print(add3(10))  # Output: 13
print(add3.__closure__)