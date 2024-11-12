import os
from flask import (flash,
                   )

def read_file_to_str(filepath):
    with open(filepath, 'r') as f:
        return f.read()
    
def write_str_to_file(filepath, text:str):
    with open(filepath, 'w') as f:
        f.write(text)

    