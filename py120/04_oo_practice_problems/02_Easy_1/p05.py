class Fruit:
    def __init__(self, name):
        my_name = name

class Pizza:
    def __init__(self, name):
        self.my_name = name


'''
Only the `Pizza` class, because its variable contains a reference to the 
instance object, while `Fruit` does not
'''

pear = Fruit('pear')
print(vars(pear))

cheese = Pizza('cheese')
print(vars(cheese))