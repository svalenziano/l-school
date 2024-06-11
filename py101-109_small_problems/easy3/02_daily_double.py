'''
Different methods of checking for duplicates

'''
# v0 DIDN'T WORK :(
def crunch_v0(string):
    crunched = ''
    for index, char in enumerate(string):
        # skip if the following character is the same as the current character
        if string[index + 1] == char:
            continue
        # else append to crunched
        crunched += char
    return crunched

# v1 DIDN'T WORK :(
def crunch_v1(string):
    crunched = ''
    while len(string) > 1:
        if string[0] != string [1]:
            crunched += string[0]
        string = string[1:]
    print(crunched)
    return crunched

# v2 WORKED, BUT IS V MESSY
def crunch_v2(string):
    if string == '':
            return ''
    index = 0
    crunched = ''
    while index < len(string):
        # if it's the last character
        char = string[index]
        if index == len(string) - 1:
            # append that character and return 'crunched'
            ret = crunched + char
            return ret
        # if character at index is identical to the character at the next index
        elif char == string[index + 1]:
            # increment index
            index += 1
        # else append the character to 'crunched' and increment index
        else:
            crunched += char
            index += 1

# A CLEANER WAY?
    # Try:
        # Generate a substring that consists of the 1st character and the 2nd character
        # append if len(set()) == 2
    # Except:
        # Return the string with a single character appended

# A CLEANER WAY V2?
    # while the next instance of the character isn't the subsequent character
        # append the character

# ELABORATING ON V2
    # for each character
        # find the next instance of the character
        # if found index = -1, append and return
        # elif found index - current index == 1:
            # continue
        # else: append and continue

# EXECUTING V2
def crunch(string):
    crunched = ''
    # for each character
    for index, char in enumerate(string):
        # find the next instance of the character
        found = string.find(char, index + 1)
        # skip if found index - current index == 1:
        if found - index == 1:
            continue
        else:
            crunched += char
    return crunched

# These examples should all print True
print(crunch('ddaaiillyy ddoouubbllee') == 'daily double')
print(crunch('4444abcabccba') == '4abcabcba')
print(crunch('ggggggggggggggg') == 'g')
print(crunch('abc') == 'abc')
print(crunch('a') == 'a')
print(crunch('') == '')
