from uuid import uuid4
from utils import (is_valid_len, 
                   title_is_unique, 
                   list_by_id,
                   return_new_todo_list,
                   return_new_todo)
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
    # Check session for list info
    if 'lists' not in session:
        session['lists'] = []
    else:
        g.lists = session['lists']

@app.route("/")
def index():
    return app.redirect('/lists')

# @app.get('/list')
# def no_list():
#     raise NotFound()

@app.get('/list/<lst_id>')
def one_list(lst_id):
    ids = [lst['id'] for lst in session['lists']]
    print(ids)
    
    if lst_id in ids:
        lst = list_by_id(g.lists, lst_id)
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
    lst = list_by_id(g.lists, list_id)
    if not lst:
        raise NotFound("List not found!")
    # if list is valid, update the session
    if is_valid_len(new_todo, 1, 100):
        lst['todos'].append(return_new_todo(new_todo))
        session.modified = True
        flash('Todo added', category='message')
        default = ''
    return render_template('list.html', id=list_id, lst=lst, default=default)

if __name__ == "__main__":
    app.run(debug=True, port=5003)