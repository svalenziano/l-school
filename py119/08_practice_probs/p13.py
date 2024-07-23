'''
RESULT = 🟢 Easy, took ~10 mins.  v1 was a bad idea but luckily I switched to v2 halftway thru
            writing the alg

P
    Input = two strings
    Output = boolean.  Can some portion of string1 be rearranged to match chars
        in str2?
    Reqs
        EX
            Strings are never empty
            Both strings contain only lowercase alpha characters
E
D
    list of chars?
A
    
    v1
    can_rearrange_into[HELPER]
    
    
    [MAIN FUNC]
    Create a list of all substrings in the 1st string (comprehension)
    Create a list of chars in the 2nd string
    For each substring in the `substring_list`, 
        check to see if that substring can be rearranged to form string2


    v2
    `str1_lst` = list of characters in string1
    `str2_lst`
    While there are characters in `str2`
        Check to see if that char is in string 1
        If yes:
            remove that character from both lists
        If no
            return False
    return True
'''

def unscramble(string_to_use, string_to_match):
    chars_to_use = list(string_to_use)
    chars_to_match = list(string_to_match)
    while len(chars_to_match) > 0:
        char = chars_to_match[0]
        if char in chars_to_use:
            chars_to_match.pop(0)
            chars_to_use.remove(char)
        else:
            return False
    return True




print(unscramble('ansucchlohlo', 'launchschool') == True)
print(unscramble('phyarunstole', 'pythonrules') == True)
print(unscramble('phyarunstola', 'pythonrules') == False)
print(unscramble('boldface', 'coal') == True)