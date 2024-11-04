from flask import Flask, render_template, g, url_for, request

app = Flask(__name__)

# Dummy (defualt) lists
lists = [
        {"title": "Lunch Groceries", "todos": []},
        {"title": "Dinner Groceries", "todos": []},
    ]

@app.route("/")
def index():
    return app.redirect('/lists')

@app.get('/lists')
def lists():
    return render_template('lists.html', lists=lists)

@app.post('/lists')
def lists_post():
    return 'Radical'

@app.route('/lists/new')
def new_list():
    return render_template('new_list.html')

if __name__ == "__main__":
    app.run(debug=True, port=5003)