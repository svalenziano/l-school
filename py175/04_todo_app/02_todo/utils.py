from flask import flash, session
from werkzeug.exceptions import NotFound
from uuid import uuid4
from pprint import pp

# CONSTANTS
MIN_TITLE_LENGTH = 1
MAX_TITLE_LENGTH = 50


def is_valid_len(input, min, max):
    if min <= len(input) <= max:
        return True
    return False

def title_is_unique(title:str):
    list_titles = (lst['title'] for lst in return_session_lists())
    if title in list_titles:
        return False
    return True

def list_title_is_valid(title:str):
    if not title_is_unique(title):
        flash_unique_title_error()
        return False
    if not is_valid_len(title, min=MIN_TITLE_LENGTH, max=MAX_TITLE_LENGTH):
        flash_invalid_title_length()
        return False
    return True

def flash_unique_title_error():
    flash('List name already exists!  Please choose a unique name.', 
              'error')
    
def flash_invalid_title_length():
    flash((f'☹️ Input must be between {MIN_TITLE_LENGTH} ' +
               f'and {MAX_TITLE_LENGTH} characters long'), 
               category='error')
    
def flash_title_updated():
    flash('List title updated! 💪')

def initialize_session():
    if 'lists' not in session:
        session['lists'] = []
        session.update = True

def return_session_lists():
    return session['lists']

def return_all_list_ids():
    return [lst['id'] for lst in return_session_lists()]

def verify_list_exists(list_id_to_verify):
    if not list_id_to_verify in return_all_list_ids():
        raise NotFound("List not found ☹️.")

def return_list_by_id(id):
    for lst in return_session_lists():
        if lst['id'] == id:
            return lst
    return []
        
def list_is_completed(list_id):
        if (count_todos(list_id) > 0 and count_incomplete_todos(list_id) == 0):
            return True
        return False
        
def list_title(lst):
    return lst['title'].lower()

def delete_list_from_session(list_id):
    lists = return_session_lists()
    for idx, lst in enumerate(lists):
        if lst['id'] == list_id:
            lists.pop(idx)

def return_todos_for_list(list_id):
    '''
    Returns a list of todos (a list of dictionaries)
    '''
    lst = return_list_by_id(list_id)
    if lst:
        return lst['todos']
    return []

def return_all_todo_ids():
    lst = return_session_lists()
    todo_ids = [todo['id']
                for lst in lst
                for todo in lst['todos']]
    # print(f"{todo_ids}=")
    return todo_ids

def verify_todo_exists(todo_id_to_verify):
    if not todo_id_to_verify in return_all_todo_ids():
        raise NotFound("Todo not found ☹️.")


def return_todo_by_id(lst_id, todo_id):
    lst = return_list_by_id(lst_id)
    # print(f"{lst=}")
    for todo in lst['todos']:
        if todo['id'] == todo_id:
            return todo

def delete_todo_by_id(lst_id, todo_id):
    lst = return_list_by_id(lst_id)
    for idx, todo in enumerate(lst['todos']):
        if todo['id'] == todo_id:
            del lst['todos'][idx]

def return_new_todo_list(title:str):
    return {'id': str(uuid4()),
            'title': title, 
            'todos': []}

def return_new_todo(text:str):
    return {'id': str(uuid4()),
            'title': text, 
            'completed': False}

def toggle_todo_completed(list_id, todo_id):
    todo = return_todo_by_id(list_id, todo_id)
    # print("todo before", todo)
    todo['completed'] = not todo['completed']

def count_todos(list_id):
    return len(return_todos_for_list(list_id))

def count_incomplete_todos(list_id):
    return sum(1 for todo in return_todos_for_list(list_id) 
                if not todo['completed'])


    # Verified that the object accessed by `todo` is 
    # the same as the object accessed by passing
    # explicit indexes!!! 
    # pp("session = " + str(session))
    # session_todo = (session
    #       ['lists']
    #       [0]
    #       ['todos']
    #       [0])
    # print("🟢 Direct access=".rjust(20), hex(id(session_todo)))
    # print("🔴 id(todo)=".rjust(20), hex(id(todo)))
    # print("todo after", session_todo)

    # THE SESSION IS NOT BEING MODIFIED!!!  
    
    # print(f"{todo['completed']=}")
    # pp(session)

# class Todo:
#     def __init__(self, name):
#         self.id = str(uuid4())
#         self.name = name
#         self.done = False
    
#     def __repr__(self):
#         return ' | '.join([self.id,
#                            self.name,
#                            str(self.done)])


# if __name__ == '__main__':
#     x = Todo('hello world')
#     print(x)