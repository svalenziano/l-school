import secrets
from functools import wraps
from flask import (
    flash,
    Flask,
    g,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from werkzeug.exceptions import NotFound
from todos.session_persistence import SessionPersistence

from todos.utils import (
    error_for_list_title, 
    error_for_todo, 
    find_todo_by_id,
    is_list_completed,
    is_todo_completed,
    mark_all_completed,
    sort_items,
    todos_remaining,
)

app = Flask(__name__)
app.secret_key = 'TODO: CHANGE ME'
# Random secret key is INCOMPATIBLE w/ storing data in session (? per SV):
# app.secret_key=secrets.token_hex(32)  

# ENABLE TYPE HINTING FOR `g` object
class _g:
    storage: SessionPersistence

    def __getattr__(self, key):
        return getattr(g, key)
g = _g()


# HELPER FUNCTIONS

def require_list(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        '''
        sv: Ensures that 'list_id' kwarg refers to a real list
        Otherwise, raises 404/Not Found
        '''

        list_id = kwargs.get('list_id')
        lst = g.storage.find_list_by_id(list_id)
        if not lst:
            raise NotFound(description="List not found")
        return f(lst=lst, *args, **kwargs)

    return decorated_function

def require_todo(f):
    '''
    sv:
    Ensures that the requested `todo_id` exists.
    Otherwise, raises 404/ Not Found

    Pass-thru of vars:
        - lst
        - list_id
    '''
    @wraps(f)
    @require_list
    def decorated_function(lst, list_id, *args, **kwargs):
        todo_id = kwargs.get('todo_id')
        todo = g.storage.find_todo_by_id(todo_id, list_id)
        if not todo:
            raise NotFound(description="Todo not found")
        return f(list_id=list_id, 
                 *args, 
                 **kwargs)

    return decorated_function

@app.context_processor
def list_utilities_processor() -> dict:
    """
    Provides templates with `is_list_completed()` callable

    Context processors run prior to rendering any template, providing
    context to the template.  
    This C.P. passes the `is_list_completed` function to the Jinja template
    where it can be called by the template, as needed.
    """

    return dict(
        is_list_completed=is_list_completed,
    )

@app.before_request
def load_storage():
    if 'lists' not in session:
        session['lists'] = []
    g.storage = SessionPersistence(session)


"""
ROUTES 
"""

@app.route("/")
def index():
    return redirect(url_for('get_lists'))

@app.route("/lists")
def get_lists():
    """Show all existing lists & allow for creation of new lists"""
    lists = sort_items(g.storage.all_lists(), is_list_completed)
    return render_template('lists.html',
                           lists=lists,
                           todos_remaining=todos_remaining)

@app.route("/lists", methods=["POST"])
def create_list():
    """Handle form requests for new lists"""
    title = request.form["list_title"].strip()

    # If the requested title is invalid, re-render the `new list` page
    error = error_for_list_title(title, g.storage.all_lists())
    if error:
        flash(error, "error")
        return render_template('new_list.html', title=title)

    # If title is valid, update the session and show all lists
    g.storage.create_list(title)
    
    flash("The list has been created.", "success")
    return redirect(url_for('get_lists'))

@app.route("/lists/new")
def add_todo_list():
    """Display form to create new list"""
    return render_template('new_list.html')

@app.route("/lists/<list_id>")
@require_list
def show_list(lst, list_id):
    """Display a specific todo list"""
    lst['todos'] = sort_items(lst['todos'], is_todo_completed)
    return render_template('list.html', lst=lst)

@app.route("/lists/<list_id>/todos", methods=["POST"])
@require_list
def create_todo(lst, list_id) -> redirect:
    """Handle requests for adding a new todo to an existing list"""

    todo_title = request.form["todo"].strip()
    error = error_for_todo(todo_title)
    if error:
        flash(error, "error")
        return render_template('list.html', lst=lst)

    g.storage.create_todo(list_id, todo_title)
    flash("The todo was added.", "success")
    return redirect(url_for('show_list', list_id=list_id))

@app.route("/lists/<list_id>/todos/<todo_id>/toggle", methods=["POST"])
@require_todo
def update_todo_status(todo_id, list_id):
    """Handle POST requests for toggling the todo status"""
    
    status =  (request.form['completed'] == 'True')
    g.storage.update_todo_by_id(todo_id, list_id, status)
    flash("The todo has been updated.", "success")
    return redirect(url_for('show_list', list_id=list_id))

@app.route("/lists/<list_id>/todos/<todo_id>/delete", methods=["POST"])
@require_todo
def delete_todo(list_id, todo_id):
    g.storage.delete_todo_by_id(todo_id, list_id)
    flash("The todo has been deleted.", "success")
    return redirect(url_for('show_list', list_id=list_id))

@app.route("/lists/<list_id>/complete_all", methods=["POST"])
@require_list
def mark_all_todos_completed(lst, list_id):
    mark_all_completed(lst)

    flash("All todos have been updated.", "success")
    session.modified = True
    return redirect(url_for('show_list', list_id=list_id))

@app.route("/lists/<list_id>/edit")
@require_list
def edit_list(lst, list_id):
    return render_template('edit_list.html', lst=lst)

@app.route("/lists/<list_id>/delete", methods=["POST"])
@require_list
def delete_list(lst, list_id):
    g.storage.delete_list(list_id)
    flash("The list has been deleted.", "success")
    return redirect(url_for('get_lists'))

@app.route("/lists/<list_id>", methods=["POST"])
@require_list
def update_list(lst, list_id):
    """
    Update the list title

    The `lst` arg is provided by the `require_list` decorator (passed as kwarg)
    """
    title = request.form["list_title"].strip()

    error = error_for_list_title(title, g.storage.all_lists())
    if error:
        flash(error, "error")
        return render_template('edit_list.html', lst=lst, title=title)

    g.storage.update_list_by_id(list_id, title)
    flash("The list has been updated.", "success")
    return redirect(url_for('show_list', list_id=list_id))

if __name__ == "__main__":
    app.run(debug=True, port=5003)