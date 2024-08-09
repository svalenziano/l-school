class Fruit:
    def __init__(self, name):
        my_name = name

class Pizza:
    def __init__(self, name):
        self.my_name = name

'''
Only class Pizza creates an object iwht an instance variable, indicated by the 
`self` in `self.my_name = name`.  The __init__ in Fruit only creates `my_name`
which is local to `__init__` and won't become part of an instantiated
object's state.
'''

banana = Fruit('banana')
print(vars(banana))
cheese = Pizza('cheese')
print(vars(cheese))