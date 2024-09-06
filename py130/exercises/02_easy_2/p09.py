'''


Given a nested tuple data = ((1, 2), (3, 4), (5, 6)), write a code to unpack this tuple into individual variables a, b, c, d, e, f.
'''


data = ((1, 2), (3, 4), (5, 6))

(a, b), (c, d), (e, f) = data

for var in [a, b, c, d, e, f]:
    print(var)