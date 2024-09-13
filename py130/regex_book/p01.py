# SV Code
import re

def is_url(string):
    return bool(re.match(r'^https?://\S+$', string))


# LS Tests
print(is_url('https://launchschool.com'))    # -> true
print(is_url('http://example.com'))          # -> true
print(is_url('https://example.com hello'))   # -> false
print(is_url('   https://example.com'))      # -> false