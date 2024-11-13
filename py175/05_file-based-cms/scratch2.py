from functools import partial

def counter(string_to_parse, letter_to_count):
    return string_to_parse.count(letter_to_count)

a, e, space = (partial(counter, letter_to_count=char) for char in 'ae ')

string = 'the quick brown fox jumps over the lazy dog'
    
print(a(string))
print(e(string))
print(space(string))