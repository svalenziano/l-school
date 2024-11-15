from flask import (Flask, 
                   render_template,
                   send_from_directory,
                   flash,
                   url_for,
                   request,
                   session,
                   g)
import os
import os.path
from functools import wraps
from markdown import markdown
from utils import *

def return_data_dir():
    root = os.path.abspath(os.path.dirname(__file__))
    if app.testing:
        # print("🔴 Testing is enabled.")
        return os.path.join(root, 'tests/data')
    return os.path.join(root, "cms/data")

def get_data_dir(f):
    '''
    Get path to data directory and store in `g.data_dir`
    '''
    @wraps(f)
    def wrapper(*args, **kwargs):
        g.data_dir = return_data_dir()
        # print(f"✨{g.data_dir=}")
        return f(*args, **kwargs)
    return wrapper

def verify_filename(f):
    @wraps(f)
    @get_data_dir
    def wrapper(*args, **kwargs):
        g.filenames = get_files(g.data_dir)
        if kwargs:
            filename = kwargs['filename']  # Assumes `filename` is first positional arg!
            if not filename in g.filenames:
                flash(f'{filename} does not exist.')
                return app.redirect(url_for('index'), 302)
            g.filename = filename
            g.filepath = os.path.join(g.data_dir, g.filename)
            # print(f"⏩{g.filename=}")
            # print(f"⏩{g.filenames=}")
        return f(*args, **kwargs)
    return wrapper

app = Flask(__name__)
app.secret_key = 'TKTK_CHANGE ME'

@app.route("/testing")
def testing():
    return ('Session:\n' + str(session))

@app.route("/")
@verify_filename
def index():
    # check for login credentials
    username = session.get('username')

    return render_template('index.html', filenames = g.filenames, 
                           username=username)

@app.route('/<filename>')
@verify_filename
def file(filename):
    if filename.endswith('.md'):
        path = os.path.join(g.data_dir, filename)
        with open(path, 'r') as f:
            html = markdown(f.read())
        return render_template('file.html', safe_content=html)
    return send_from_directory(g.data_dir, filename)

@app.get('/<filename>/edit')
@verify_filename
def edit(filename):
    filepath = os.path.join(g.data_dir, filename)
    return render_template('edit.html', 
                           filename=filename, 
                           current_file=read_file_to_str(filepath))

@app.post('/<filename>/save')
@get_data_dir
def save(filename):
    filepath = os.path.join(g.data_dir, filename)
    old_contents = read_file_to_str(filepath)
    new_contents = request.form['raw_file']
    # if old_contents.strip() == new_contents.strip():
    #     flash('No changes detected, file was not modified.')
    # else:
    write_str_to_file(filepath=filepath, 
                    text=new_contents)
    flash(f"🙌 <{filename}> has been updated!")
    return app.redirect(url_for('index'))

@app.get('/new')
def new():
    return render_template('new_file.html')

@app.post('/new')
@get_data_dir
def new_post():
    def reload():
        return render_template('new_file.html', invalid_filename=filename), 422

    filename = request.form['filename']

    if not filename:
        flash("Document name can't be empty!", 'error')
        return reload()
    if not is_valid_filename(filename):
        flash("Filename is invalid.", 'error')
        return reload()
    MAX = 50
    if len(filename) > MAX:
        flash(f"Maximum filename length of {MAX} characters, please", 'error')
        return reload()
    if file_exists(g.data_dir, filename):
        flash("Filename already exists.  Please pick a unique name.")
        return reload()

    # If filename is valid
    filepath = os.path.join(g.data_dir, filename)
    write_str_to_file(filepath, text='')
    flash(f'{filename} created!')
    return app.redirect(url_for('edit', filename=filename))

@app.post('/delete')
@get_data_dir
def delete_file():
    
        

    filename = request.form.get('file_to_delete')
    
    def failure():
        flash(f"Failed to delete {filename} :(")
        return app.redirect(url_for('index')), 422
    
    if session.get('username') != 'admin':
        return failure()

    if not filename:
        return failure()
    filepath = os.path.join(g.data_dir, filename)

    try:
        os.remove(filepath)
    except OSError:
        return failure()
    
    flash(f"{filename} has been deleted.")
    return app.redirect(url_for('index'))

@app.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'GET':
        return render_template('login.html')
    if request.method == 'POST':
        uname = request.form['username']
        pword = request.form['password']
        if uname == 'admin' and pword == 'secret':
            session['username'] = uname
            session.modified = True
            flash(f"Welcome {uname}!")
            return app.redirect(url_for('index'))
        else:
            flash("Invalid login credentials, please try again.")
            return render_template('login.html', username=uname), 422

@app.route('/logout')
def logout():
    del session['username']
    session.modified = True
    flash("As you wish.  You've been logged out.")
    return app.redirect(url_for('index'))

if __name__ == "__main__":
    # To function properly, requires `export LS_DEV_MACHINE=true` in .bashrc
    x = os.environ.get('LS_DEV_MACHINE')  
    if x:
        # print("🔴")
        app.run(debug=True, port=5003)
    else:
        app.run(debug=False)


        