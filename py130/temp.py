from functools import partial

def counter(string_to_parse, letter_to_count):
    return string_to_parse.count(letter_to_count)

a, e, space = (partial(counter, letter_to_count=char) for char in 'ae ')

string = 'the quick brown fox jumps over the lazy dog'
    
print(a(string))
print(e(string))
print(space(string))

short = 'hello world!'
long = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        "sed do eiusmod tempor incididunt ut labore et dolore magna "
        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis "
        "aute irure dolor in reprehenderit in voluptate velit esse cillum "
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat "
        "cupidatat non proident, sunt in culpa qui officia deserunt "
        "mollit anim id est laborum.")

if space(short):
    print(space(long))