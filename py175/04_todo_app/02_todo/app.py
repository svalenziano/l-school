from pprint import pp
from uuid import uuid4
from utils import (is_valid_len, 
                   title_is_unique, 
                   return_list_by_id,
                   return_new_todo_list,
                   return_new_todo,
                   return_all_list_ids,
                   return_all_lists,
                   verify_lists_exist,
                   return_all_todo_ids,
                   toggle_todo_completed)
from werkzeug.exceptions import NotFound

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

# CONSTANTS
MIN_TITLE_LENGTH = 1
MAX_TITLE_LENGTH = 50


app = Flask(__name__)
app.secret_key='secret1'  # WARNING, INSECURE!

# Dummy (defualt) lists
lists = [
        {"title": "Lunch Groceries", "todos": []},
        {"title": "Dinner Groceries", "todos": []},
    ]

@app.before_request
def before_request():
    # pp(session)
    verify_lists_exist()
    g.lists = return_all_lists()

@app.route("/")
def index():
    return app.redirect('/lists')

# @app.get('/list')
# def no_list():
#     raise NotFound()

@app.get('/list/<lst_id>')
def one_list(lst_id):
    
    if lst_id in return_all_list_ids():
        lst = return_list_by_id(lst_id)
        return render_template('list.html', id=lst_id, lst=lst)
    raise NotFound(description="Hmm, I can't find that list.")

# @app.errorhandler(404)
# def error_404(error):
#     return f'This page does not exist: {error}', 404

@app.get('/lists')
def lists():
    return render_template('lists.html', lists=g.lists)

@app.post('/lists')
def lists_post():
    new_list_title = request.form['list_title'].strip()
    lists = g.lists
    
    print(f"{new_list_title=}")
    print(f"{lists=}")

    if not title_is_unique(title=new_list_title, lists=lists):
        return render_template('new_list.html', 
                               default_value=new_list_title)
    
    if not is_valid_len(new_list_title,
                                min=MIN_TITLE_LENGTH,
                                max=MAX_TITLE_LENGTH ):
        return render_template('new_list.html', 
                               default_value=new_list_title)

    g.lists.append(return_new_todo_list(new_list_title))
    flash('List created!', category='success')
    session.modified = True
    return app.redirect(url_for('lists'))
    


@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

@app.post('/lists/<list_id>/todos')
def new_todo(list_id):
    new_todo = request.form['todo']
    default = new_todo
    lst = return_list_by_id(list_id)
    if not lst:
        raise NotFound("List not found!")
    # if list is valid, update the session
    if is_valid_len(new_todo, 1, 100):
        lst['todos'].append(return_new_todo(new_todo))
        session.modified = True
        flash('Todo added', category='message')
        default = ''
    return render_template('list.html', id=list_id, lst=lst, default=default)

@app.post('/lists/<list_id>/todos/<todo_id>/toggle')
def toggle_todo(list_id, todo_id):
    # print('request = ', request)
    
    # validate requested URL
    if not list_id in return_all_list_ids():
        raise NotFound("List not found ☹️.")
    if not todo_id in return_all_todo_ids():
        raise NotFound("Todo not found ☹️.")
    
    toggle_todo_completed(list_id, todo_id)
    session.update = True

    return app.redirect(url_for('one_list', lst_id=list_id))



if __name__ == "__main__":
    app.run(debug=True, port=5003)