import re

text = '''
"The quick" bro'wn fox'
Jum'ps 'over the yellow dog
"I can't"
'I won't'
'''

found = re.findall(r'''
    (["'])      # Match the opening quote (single or double)
    (.+?)       # Match the content inside the quotes (lazy aka non-greedy)
    \1          # Match the same quote that opened the string
    ''', text, flags=re.VERBOSE)

# Extracting only the matched strings (the first element of the tuple)
matched_strings = [match[0] + match[1] + match[0] for match in found]
print(matched_strings)