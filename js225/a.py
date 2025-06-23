funcs = [lambda: 6 for i in [1, 2]]
print([f.__closure__ for f in funcs])  # [None, None]