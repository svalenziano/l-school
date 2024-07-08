def invert_dict_v01(my_dict):
    return dict(zip(my_dict.values(), my_dict.keys()))

def invert_dict(my_dict):
    return {value:key for key, value in my_dict.items()}


print(invert_dict({
          'apple': 'fruit',
          'broccoli': 'vegetable',
          'salmon': 'fish',
      }) == {
          'fruit': 'apple',
          'vegetable': 'broccoli',
          'fish': 'salmon',
      })  # True