import re
import os
import rich
from functools import wraps, partial
from flask import (flash,
                   request,
                   render_template,
                   session)
import yaml
from app import app
from passwords import *


# SETUP COLOR PRINTING *****************************************************

def print_pfa(text:str, color='red'):
    rich.print(f"[{color}]{text}[/{color}]")

red, blue, green = (partial(print_pfa, color=color) 
                    for color in ['red', 'blue', 'green'])

def user_is_logged_in():
    username = session.get('username')
    username_is_valid = username in get_valid_logins()
    return username_is_valid

def make_login_filepath():
    return os.path.join(return_data_dir(), 'users.yaml')

def get_valid_logins():
    valids = None
    with open(make_login_filepath(), 'r') as f:
        valids = yaml.safe_load(f)
        red('get_valid_logins = ' + str(valids))
        return valids
    if not valids:
        raise OSError('Failed to load logins from YAML')
    
def write_test_login_yaml():
    with open(make_login_filepath(), 'w') as f:
        test_login = {'admin': 'secret'}
        yaml.dump(test_login, f)

def return_data_dir():
    root = os.path.abspath(os.path.dirname(__file__))
    if app.testing:
        # print("🔴 Testing is enabled.")
        return os.path.join(root, 'tests/data')
    return os.path.join(root, "cms/data")

def read_file_to_str(filepath):
    with open(filepath, 'r') as f:
        return f.read()
    
def write_str_to_file(filepath, text:str):
    with open(filepath, 'w') as f:
        f.write(text)

def get_files(directory):
    '''
    Only return filenames with an extension
    '''
    fnames = [fname for fname in os.listdir(directory)
                if fname.find('.') and fname != 'users.yaml']
    fnames.sort()
    return fnames

def file_exists(directory, file):
    exst_files = get_files(directory)
    return bool(file in exst_files)

def valid_filename_chars(str_to_validate:str):
    '''
    Returns True only if all characters are allowable in a filename
    '''
    valid_chars = re.compile(r"[\w\-.']+")
    match = valid_chars.fullmatch(str_to_validate)
    if match:
        return True
    else:
        return False
    
def is_valid_filename(filename:str):
    '''
    Validates a filename
    '''
    if not '.' in filename:
        return False
    if filename.startswith('.') or filename.endswith('.'):
        return False
    if not valid_filename_chars(filename):
        return False
    if filename.find('..') > 0:
        return False
    return True