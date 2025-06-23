funcs = []
for i in [1, 2]:
    funcs.append(lambda: i)

print([f.__closure__ for f in funcs])  # [None, None]
# print([f() for f in funcs])  # [2, 2]

for f in funcs:
    print(f.__closure__)  # expect closure, get None !?!?

i = 99