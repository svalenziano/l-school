def my_decorator(func):
    some_var = 5
    first, *middle, last = list(range(43))
    def wrapper():
        print("Before the function call")
        print(some_var); print(first, middle, last)
        func()
        print("After the function call")

    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

print(say_hello.__closure__)
print(hex(id(say_hello)))