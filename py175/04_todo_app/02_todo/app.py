from uuid import uuid4

from flask import (
    Flask, 
    render_template, 
    g, 
    url_for, 
    request, 
    session,
    flash,
)

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

    # Check to see if new title is not too short or too long
    min_len = 1
    max_len = 50

    # If it's valid, create a new list
    if any(new_list_title == lst['title'] for lst in session['lists']):
        flash('List name already exists!  Please choose a unique name.', 
              'error')
        return render_template('new_list.html', default_value=new_list_title)
    
    if min_len <= len(new_list_title) <= max_len:    
        session['lists'].append({
            'id': str(uuid4()),
            'title': new_list_title, 
            'todos': []
        })
        flash('List created!', category='success')
        session.modified = True
        return app.redirect(url_for('lists'))
    
    # Otherwise, provide error msg
    else:
        flash((f'☹️ Name must be between {min_len} ' +
               f'and {max_len} characters long'), 
               category='error')
    # session.modified = True
    return render_template('new_list.html', default_value=new_list_title)



@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

if __name__ == "__main__":
    app.run(debug=True, port=5003)