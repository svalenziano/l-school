import os
from pprint import pp
from uuid import uuid4
from utils import *
from werkzeug.exceptions import NotFound
from functools import wraps

from flask import (
    Flask, 
    render_template, 
    g, 
    url_for, 
    request, 
    session,
    flash,
    abort
)


app = Flask(__name__)
app.secret_key='secret1'  # WARNING, INSECURE!

# Dummy (defualt) lists
lists = [
        {"title": "Lunch Groceries", "todos": []},
        {"title": "Dinner Groceries", "todos": []},
    ]

def require_list(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        '''
        Ensure that list exists and is valid
        '''
        list_id = kwargs.get('list_id') or kwargs.get('lst_id')
        verify_list_exists(list_id)
        return f(*args, **kwargs)
    return wrapper

def require_todo(f):
    @wraps(f)
    @require_list
    def wrapper(*args, **kwargs):
        todo_id = kwargs.get('todo_id')
        verify_todo_exists(todo_id)
        return f(*args, **kwargs)
    return wrapper

@app.before_request
def before_request():
    # pp(session)
    initialize_session()
    g.lists = return_session_lists()

@app.context_processor
def for_all_templates():
    return dict(
        completed=list_is_completed
    )

@app.route("/")
def index():
    return app.redirect('/lists')

# @app.get('/list')
# def no_list():
#     raise NotFound()

@app.get('/list/<lst_id>')
@require_list
def one_list(lst_id):
    lst = return_list_by_id(lst_id)
    return render_template('list.html', id=lst_id, lst=lst)

# @app.errorhandler(404)
# def error_404(error):
#     return f'This page does not exist: {error}', 404

@app.get('/lists')
def lists():
    # sort alphabetically and by completion status
    g.lists.sort(key=list_title)
    complete = [lst for lst in g.lists
                if list_is_completed(lst['id'])]
    incomplete = [lst for lst in g.lists
                if not list_is_completed(lst['id'])]
    g.lists = incomplete + complete
    session['lists'] = g.lists
    session.modified = True
    
    return render_template('lists.html', 
                           lists=g.lists,
                           count_incomplete=count_incomplete_todos)

@app.post('/lists')
def lists_post():
    '''
    Handles form requests for adding a new list
    '''
    new_list_title = request.form['list_title'].strip()
    
    if not list_title_is_valid(new_list_title):
        return render_template('new_list.html', 
                               default_value=new_list_title)

    g.lists.append(return_new_todo_list(new_list_title))

    flash('List created!', category='success')
    session.modified = True
    return app.redirect(url_for('lists'))

@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

@app.post('/lists/<list_id>/update_title')
@require_list
def update_list_title(list_id):
    new_title = request.form['list_title']
    if list_title_is_valid(new_title):
        lst = return_list_by_id(list_id)
        lst['title'] = new_title
        session.modified = True
        flash_title_updated()
        return app.redirect(url_for('one_list', lst_id=list_id))
    else:
        return app.redirect(url_for('edit_list', list_id=list_id))

@app.post('/lists/<list_id>/delete')
@require_list
def delete_list(list_id):
    title = return_list_by_id(list_id)['title']
    delete_list_from_session(list_id)
    session.modified = True
    flash(f'List "{title}" has been deleted.')
    return app.redirect(url_for('lists'))


@app.route('/lists/<list_id>/edit')
@require_list
def edit_list(list_id):
    return render_template('edit_list.html', 
                           lst=return_list_by_id(list_id))

@app.post('/lists/<list_id>/complete_all')
@require_list
def complete_all(list_id):
    todos = return_todos_for_list(list_id)
    for todo in todos:
        todo['completed'] = True
    session.modified = True
    flash('All todos have been marked complete. 💪')
    print(session)
    return app.redirect(url_for('one_list', lst_id=list_id))
    

@app.post('/lists/<list_id>/todos')
@require_list
def new_todo(list_id):
    new_todo = request.form['todo']
    default = new_todo
    lst = return_list_by_id(list_id)
    # if todo is valid, update the session
    if is_valid_len(new_todo, 1, 100):
        lst['todos'].append(return_new_todo(new_todo))
        session.modified = True
        flash('Todo added', category='message')
        default = ''
    return render_template('list.html', id=list_id, lst=lst, default=default)

@app.post('/lists/<list_id>/todos/<todo_id>/toggle')
@require_todo
def toggle_todo(list_id, todo_id):
    toggle_todo_completed(list_id, todo_id)
    session.modified = True
    return app.redirect(url_for('one_list', lst_id=list_id))

@app.post('/lists/<list_id>/todos/<todo_id>/delete')
@require_todo
def delete_todo(list_id, todo_id):
    delete_todo_by_id(list_id, todo_id)
    session.modified = True
    return app.redirect(url_for('one_list', lst_id=list_id))



if __name__ == "__main__":
    if os.environ.get('FLASK_ENV') == 'production':
        app.run(debug=False)
    else:
        app.run(debug=True, port=5003) # Use port 8080 on Cloud9
