'''
RESULT = 🟢 18 minutes.  Relatively easy, after I realized that my initial approach of sorting 
    the characters in order of frequency was a bad ideas

P
    INPUT = str
    OUTPUT = string of length 1: char w highest count in the string
    REQS
        EX
            - multiple chars with same highest freq?  return char w lowest index in orig str
            - case insenstive
        IMP
            - return lowercase
E
D
    - dict
A
    - create dict of lowercased characters : counts (comprehension)
    - sort dict keys using dict.get as key
    - return index 0 of sorted list (list of keys)
'''

def most_common_char(string):
    string = string.casefold()
    counts = {char: string.count(char)
              for char in string}
    #print(list(counts.keys()))
    most_common = sorted(list(counts.keys()), key=counts.get, reverse=True)
    return most_common[0]

#most_common_char('Hello World')
#most_common_char('Mississippi')
#most_common_char('Happy birthday')
#most_common_char('aaaaaAAAA')

def ls_tests():
    print(most_common_char('Hello World') == 'l')
    print(most_common_char('Mississippi') == 'i')
    print(most_common_char('Happy birthday!') == 'h')
    print(most_common_char('aaaaaAAAA') == 'a')

    my_str = 'Peter Piper picked a peck of pickled peppers.'
    print(most_common_char(my_str) == 'p')

    my_str = 'Peter Piper repicked a peck of repickled peppers. He did!'
    print(most_common_char(my_str) == 'e')

ls_tests()