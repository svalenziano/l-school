



def reverse_string(string):
    newstring = ''
    for char in string:
        newstring = char + newstring
    return newstring

print(reverse_string("hello") == "olleh")