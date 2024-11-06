from flask import g, flash, session
from uuid import uuid4
from pprint import pp

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

def verify_lists_exist():
    if 'lists' not in session:
        session['lists'] = []
        session.update = True

def return_all_lists():
    return session['lists']

def return_all_list_ids():
    return [lst['id'] for lst in return_all_lists()]

def return_list_by_id(id):
    for lst in return_all_lists():
        if lst['id'] == id:
            return lst

def return_all_todo_ids():
    lst = return_all_lists()
    todo_ids = [todo['id']
                for lst in lst
                for todo in lst['todos']]
    # print(f"{todo_ids}=")
    return todo_ids

def return_todo_by_id(lst_id, todo_id):
    lst = return_list_by_id(lst_id)
    # print(f"{lst=}")
    for todo in lst['todos']:
        if todo['id'] == todo_id:
            return todo

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
    print("todo before", todo)
    todo['completed'] = not todo['completed']
    
    # Verified that the object accessed by `todo` is 
    # the same as the object accessed by passing
    # explicit indexes!!! 
    # pp("session = " + str(session))
    session_todo = (session
          ['lists']
          [0]
          ['todos']
          [0])
    print("🟢 Direct access=".rjust(20), hex(id(session_todo)))
    print("🔴 id(todo)=".rjust(20), hex(id(todo)))
    print("todo after", session_todo)

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