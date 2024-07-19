'''
RESULT: COMPLETED IN 19 MINS.  It was kinda hard, but I got 'er done!


P
    INPUT = string
    OUTPUT = string. every other char in every 3rd word converted to uppercase
    REQS
        ex: 
        imp
            - EVERY OTHER CHARACTER, STARTING WITH THE 2ND CHAR

E
D
    list of words?
        each word = list of chars?
A
    v1, high level
    [HELPER]
        - input = string (word)
        - output = string, chars at odd indexes are uppercased
        - alg
            - convert string into list
            - use ternary and comprehension to transform
        - return string
    [MAIN]
        - split string into list of words
        - for each word, if index is multiple of 3:
            - [HELPER] make every other letter uppercase
        - recombine into string
        - return string
    
    v2
    [HELPER]
        - 
    [MAIN]
        - split string into list of words
        - for each word, if index is multiple of 3:
            - [HELPER] make every other letter uppercase
        - recombine into string using join()
        - return string
'''
def make_string_weird(normal):
    weird = [char.upper() if idx % 2 == 1 else char
             for idx, char in enumerate(normal)]
    return weird

#print(make_string_weird('AaAa'))

def to_weird_case(normal):
    normal = normal.split()
    weird = [''.join(make_string_weird(word)) if idx % 3 == 0 else word
             for idx, word in enumerate(normal, 1)]
    return ' '.join(weird)

#original = 'Lorem Ipsum is simply dummy text of the printing world'
#print(to_weird_case(original))


def tests():
    original = 'Lorem Ipsum is simply dummy text of the printing world'
    expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world'
    print(to_weird_case(original) == expected)

    original = 'It is a long established fact that a reader will be distracted'
    expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
    print(to_weird_case(original) == expected)

    print(to_weird_case('aaA bB c') == 'aaA bB c')

    original = "Mary Poppins' favorite word is supercalifragilisticexpialidocious"
    expected = "Mary Poppins' fAvOrItE word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
    print(to_weird_case(original) == expected)

tests()