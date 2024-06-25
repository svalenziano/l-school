def center_of(string):
    # if even number, get middle two characters
    length = len(string)
    middle = int(length / 2)
    
    if length % 2 == 0:
        return string[middle - 1 : middle + 1]
    return string[int(middle)]



print(center_of('I Love Python!!!') == "Py")    # True
print(center_of('Launch School') == " ")        # True
print(center_of('Launchschool') == "hs")        # True
print(center_of('Launch') == "un")              # True
print(center_of('Launch School is #1') == "h")  # True
print(center_of('x') == "x")                    # True