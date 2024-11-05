from uuid import uuid4
from utils import is_valid_len, title_is_unique

from flask import (
    Flask, 
    render_template, 
    g, 
    url_for, 
    request, 
    session,
    flash,
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

@app.route("/")
def index():
    return app.redirect('/lists')

@app.get('/lists')
def lists():
    return render_template('lists.html', lists=session['lists'])

@app.post('/lists')
def lists_post():
    new_list_title = request.form['list_title'].strip()
    lists = session.get('lists')
    
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

    session['lists'].append({'id':'tktk','title':new_list_title, 'todos': []})
    flash('List created!', category='success')
    session.modified = True
    return app.redirect(url_for('lists'))
    


@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

if __name__ == "__main__":
    app.run(debug=True, port=5003)