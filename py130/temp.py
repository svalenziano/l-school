def my_decorator(func, *args, **kwargs):
    def wrapper():
        print("Calling the func")
        func(*args, **kwargs)
        print("Wrapping things up")
    return wrapper

@my_decorator
def fancy_sort(lst_to_reverse:list, reverse=False):
    return sorted(lst_to_reverse, reverse=reverse)

my_list = list('The quick brown fox jumps over the lazy dog.')
x = fancy_sort(my_list, reverse=True)
print(x)