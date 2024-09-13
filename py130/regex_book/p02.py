# SV CODE
import re

def fields(text):
    return re.split(r'[ ,\t]+', text, flags=re.VERBOSE)

# LS TESTS
print(fields("Pete,201,Student"))       # ['Pete', '201', 'Student']
print(fields("Pete \t 201   ,  TA"))    # ['Pete', '201', 'TA']
print(fields("Pete \t 201"))            # ['Pete', '201']
print(fields("Pete \n 201"))            # ['Pete', '\n', '201']