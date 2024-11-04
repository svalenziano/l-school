from flask import (
    Flask, 
    render_template, 
    g, 
    url_for, 
    request, 
    session
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
    new_list = request.form['list_title']
    session['lists'].append({'title': new_list, 'todos': []})
    session.modified = True
    return app.redirect('lists')

@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

if __name__ == "__main__":
    app.run(debug=True, port=5003)