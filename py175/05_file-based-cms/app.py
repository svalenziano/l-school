from flask import (Flask, 
                   render_template,
                   send_from_directory,
                   flash,
                   url_for,
                   request,
                   g)
import os
import os.path
from functools import wraps
from markdown import markdown
from utils import *

def get_data_dir(f):
    '''
    Get path to data directory and store in `g.data_dir`
    '''
    @wraps(f)
    def wrapper(*args, **kwargs):
        root = os.path.abspath(os.path.dirname(__file__))
        g.data_dir = os.path.join(root, "cms/data")
        # print(f"✨{g.data_dir=}")
        return f(*args, **kwargs)
    return wrapper

def verify_filename(f):
    @wraps(f)
    @get_data_dir
    def wrapper(*args, **kwargs):
        filenames = os.listdir(g.data_dir)
        g.filenames = filenames
        if args:
            filename = args[0]  # Assumes `filename` is first positional arg!
            if not filename in filenames:
                flash(f'{filename} does not exist.')
                return app.redirect(url_for('index'))
            g.filename = filename
            # print(f"⏩{g.filename=}")
            # print(f"⏩{g.filenames=}")
        return f(*args, **kwargs)
    return wrapper

app = Flask(__name__)
app.secret_key = 'TKTK_CHANGE ME'

@app.route("/")
@verify_filename
def index():
    return render_template('index.html', filenames = g.filenames)

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
    if old_contents.strip() == new_contents.strip():
        flash('No changes detected, file was not modified.')
    else:
        write_str_to_file(filepath=filepath, 
                        text=new_contents)
        flash(f"🙌 <{filename}> has been edited!")
    return app.redirect(url_for('index'))


if __name__ == "__main__":
    x = os.environ.get('LS_DEV_MACHINE')  # requires `export LS_DEV_MACHINE=true` in .bashrc
    if x:
        # print("🔴")
        app.run(debug=True, port=5003)
    else:
        app.run(debug=False)


        