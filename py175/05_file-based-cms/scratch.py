'''
Modify the following code to provide an example of 'late binding'
'''

def prefix(my_prefix):
    def func(text):
        return my_prefix + text
    return func

x = prefix('Hello ')
print(x('World!'))
print(x)


def a_func():
    some_var = 10
    def b_func():
        some_var
    return b_func

closure_a = a_func()
print(closure_a)