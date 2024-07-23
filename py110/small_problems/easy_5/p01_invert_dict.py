'''
INPUT = dict
OUTPUT = inverted dict; that is, swap keys and values.
REQS
    ex
        All values are unique
'''


def invert_dict(my_dict):
    return {value: key for key, value in my_dict.items()}


# LS TEST:
print(invert_dict({
          'apple': 'fruit',
          'broccoli': 'vegetable',
          'salmon': 'fish',
      }) == {
          'fruit': 'apple',
          'vegetable': 'broccoli',
          'fish': 'salmon',
      })  # True