'''
P
    In
    Out
    Return
    Reqs
        Expl
            Silly(x) + y:
                If either x or y is non-numeric, concatenate the string values of x and y
                Otherwise, computer sum of int values of x and y
        Impl
E
D
A
    Coerce both x and y to strings
    If both x and y are digits (isdigit method)
        Compute sum
        return `Silly` object w sum as argument
    Else: 
        concatenate strings
        return `Silly` object
'''



class Silly:
    def __init__(self, value):
        if isinstance(value, int):
            self.value = value
        else:
            self.value = str(value)

    def __str__(self):
        return f'Silly({repr(self.value)})'
    
    def __add__(self, other):
        value = self.value
        if not (isinstance(other, str) or isinstance(other, int)):
            return NotImplemented

        both_numeric = str(value).isdigit() and str(other).isdigit()
        if both_numeric:
            new_value = int(value) + int(other)
        else:
            new_value = str(value) + str(other)
        return Silly(new_value)

print(Silly('abc') + 'def')        # Silly('abcdef')
print(Silly('abc') + 123)          # Silly('abc123')
print(Silly(123) + 'xyz')          # Silly('123xyz')
print(Silly('333') + 123)          # Silly(456)
print(Silly(123) + '222')          # Silly(345)
print(Silly(123) + 456)            # Silly(579)
print(Silly('123') + '456')        # Silly(579)