class Television:
    @classmethod
    def manufacturer(cls):
        return 'Amazon'

    def model(self):
        return 'Omni Fire'

tv = Television()
print(tv.manufacturer())
print(tv.model())

print(Television.manufacturer())
print(Television.model())


'''
SV prediction:
line 10, calling class method with instance, bad manners but will work.
        prints 'Amazon'
line 11, prints 'Omni Fire'

line 13, calling class method with class.  Good manners!  Prints 'Amazon'
line 14, calling instance method with class, won't work.
        AttributeError

'''