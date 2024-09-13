import re

text = '''
"The quick" bro'wn fox'
Jum'ps 'over the yellow dog
"I can't"
'I won't'
'''

single_quoted = r"'.+?'"
double_quoted = r'".+?"'
found = re.findall(single_quoted, text) + re.findall(double_quoted, text)
print(found)