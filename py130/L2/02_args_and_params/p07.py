'''
Create a function named register that takes exactly three arguments: username as positional-only, password as keyword-only, and age as either a positional or keyword argument.
'''


def register(username:str, /, age:int, *, password:str):
    print(f"Greetings {username}, you're now registered with age {age} and password '{password}'!")


register('POTUS', 42, password='1234abc')
register('POTUS', 42, password=0)