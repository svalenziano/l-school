from flask import g, flash
from uuid import uuid4

def is_valid_len(input, min, max):
    '''
    Verifies that input is not too short or too long
    '''
    if min <= len(input) <= max:
        # flash(f'length {len(title)} is valid (btw {min} and {max})', category='info')
        return True
    
    flash((f'☹️ Input must be between {min} ' +
               f'and {max} characters long'), 
               category='error')
    return False

def title_is_unique(title:str, lists):
    list_titles = (lst['title'] for lst in lists)
    if title in list_titles:
        flash('List name already exists!  Please choose a unique name.', 
              'error')
        return False
    return True

def list_by_id(lists, id):
    for lst in lists:
        if lst['id'] == id:
            return lst

def return_new_todo_list(title:str):
    return {'id': str(uuid4()),
            'title': title, 
            'todos': []}

def return_new_todo(text:str):
    return {'id': str(uuid4()),
            'title': text, 
            'completed': False}

class Todo:
    def __init__(self, name):
        self.id = str(uuid4())
        self.name = name
        self.done = False
    
    def __repr__(self):
        return ' | '.join([self.id,
                           self.name,
                           str(self.done)])


if __name__ == '__main__':
    x = Todo('hello world')
    print(x)