import os

def read_file_to_str(filepath):
    with open(filepath, 'r') as f:
        return f.read()