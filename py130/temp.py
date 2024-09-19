def gen_func():
    yield 5
    return 10 # 
    yield 6
    yield 10

gen_obj = gen_func()

for item in gen_obj:
    print(item)