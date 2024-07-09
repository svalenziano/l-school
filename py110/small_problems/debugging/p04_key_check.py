



def get_key_value_ORIG(my_dict, key):
    if my_dict[key]:
        return my_dict[key]
    else:
        return None
    
def get_key_value(my_dict, key):
    return my_dict.get(key)

print(get_key_value({"a": 1}, "b"))