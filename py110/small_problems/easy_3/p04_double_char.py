'''
P
    -Input = string of ASCII chars
    -Output = string.  Consonants are doubled, but not vowels.
E
D
A
    - Initialize empty string `result`
    - Iterate through chars in string
        - If char is a consonant, append the char, doubled (char * 2)
        - Otherwise, append the char, as-is
    - Return `result`
C


'''

def is_consonant(char):
    return char.isalpha() and (char.lower() not in ['a', 'e', 'i', 'o', 'u'])

def double_consonants(string):
    result = ''
    for char in string:
        result += char * 2 if is_consonant(char) else char
    return result


# All of these examples should print True
print(double_consonants('String') == "SSttrrinngg")
print(double_consonants('Hello-World!') == "HHellllo-WWorrlldd!")
print(double_consonants('July 4th') == "JJullyy 4tthh")
print(double_consonants('') == "")