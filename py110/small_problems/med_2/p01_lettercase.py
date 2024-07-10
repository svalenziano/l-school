'''
P
    - INPUT = string
    - OUTPUT = dict with values = strings 
        representing the % of lowercase, uppercase, and neither
E
D
A
    - INIT dict to hold characters:
        dict = {
            lower = 'abcd'
            upper = 'ABCDXYZ
            neither = !+.
        }
    - get `total_length_of_values`
    - for each key, value in dict.items():
        - reassign dict value to the percentage_str(fraction, total)
    - return dict
C
'''
def percent_as_string(fraction, total):
    return f"{(fraction / total)*100:.2f}"

def letter_percentages(string):
    counts = {
        'lowercase' : [],
        'uppercase' : [],
        'neither'   : [],
    }
    for letter in string:
        if not letter.isalpha():
            counts['neither'] += letter
        elif letter.islower():
            counts['lowercase'] += letter
        else:
            counts['uppercase'] += letter
    for key, val in counts.items():
        counts[key] = percent_as_string(len(val), len(string))
    return counts

expected_result = {
    'lowercase': "50.00",
    'uppercase': "10.00",
    'neither': "40.00",
}
print(letter_percentages('abCdef 123') == expected_result)

expected_result = {
    'lowercase': "37.50",
    'uppercase': "37.50",
    'neither': "25.00",
}
print(letter_percentages('AbCd +Ef') == expected_result)

expected_result = {
    'lowercase': "0.00",
    'uppercase': "0.00",
    'neither': "100.00",
}
print(letter_percentages('123') == expected_result)