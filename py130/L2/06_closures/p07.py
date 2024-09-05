'''
Write a function named later2 that takes two arguments: a function, func, and an argument for that function, first_arg. The return value should be a new function that takes an argument, second_arg. The new function should call the func with the arguments provided by first_arg and second_arg. Here's an example of how it might be used:
'''

def later2(func, first_arg):
    def new_func(second_arg):
        func(first_arg, second_arg)
    return new_func

def notify(message, when):
    print(f"{message} in {when} minutes!")

shutdown_warning = later2(notify, "The system is shutting down")
shutdown_warning(30) # The system is shutting down in 30 minutes!


