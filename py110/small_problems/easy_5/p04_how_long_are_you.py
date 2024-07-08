'''
P
E
D
A
    - string_and_length  [HELPER]
        - use string formatting to append length of string onto end of string
        - return that value
    - Main function 
        - Split words into list
        - create empty list
        - For each element in the input list
            - append string_and_length onto empty list
C'''

def string_and_length(string):
    return f"{string} {len(string)}"

def word_lengths(string=''):
    if string:
        words = string.split()
        return [string_and_length(word) for word in words]
    else:
        return []









# All of these examples should print True
words = 'cow sheep chicken'
expected_result = ['cow 3', 'sheep 5', 'chicken 7']
print(word_lengths(words) == expected_result)        # True

words = 'baseball hot dogs and apple pie'
expected_result = ['baseball 8', 'hot 3', 'dogs 4',
                   'and 3', 'apple 5', 'pie 3']
print(word_lengths(words) == expected_result)        # True

words = "It ain't easy, is it?"
expected_result = ['It 2', "ain't 5", 'easy, 5',
                   'is 2', 'it? 3']
print(word_lengths(words) == expected_result)        # True

big_word = 'Supercalifragilisticexpialidocious'
print(word_lengths(big_word) == [f'{big_word} 34'])  # True

print(word_lengths('') == [])                        # True
print(word_lengths() == [])                          # True