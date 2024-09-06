'''
Write a function display_info that takes a positional-only parameter data, and keyword-only parameters reverse and uppercase.
'''

def display_info(data:str, /, *, reverse=False, uppercase=False):
    if uppercase:
        data = data.upper()
    if reverse:
        data = data[::-1]
    return data



# LS EXAMPLES
print(display_info("Launch", reverse=True)) # hcnuaL
print(display_info("School", uppercase=True)) # SCHOOL
print(display_info("cat", uppercase=True, reverse=True)) # TAC