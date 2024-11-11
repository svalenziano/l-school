from flask import (Flask, 
                   render_template,
                   send_from_directory,
                   flash,
                   url_for,
                   g)
import os
import os.path
from functools import wraps
from markdown import markdown  

def get_data_dir(f):
    '''
    Get path to data directory and store in `g.data_dir`
    '''
    @wraps(f)
    def wrapper(*args, **kwargs):
        root = os.path.abspath(os.path.dirname(__file__))
        g.data_dir = os.path.join(root, "cms/data")
        return f(*args, **kwargs)
    return wrapper

app = Flask(__name__)
app.secret_key = 'DEVELOPMENT'

@app.route("/")
@get_data_dir
def index():
    filenames = os.listdir(g.data_dir) 
    return render_template('index.html', filenames = filenames)

@app.route('/<filename>')
@get_data_dir
def file(filename):
    filenames = os.listdir(g.data_dir) 
    if not filename in filenames:
        flash(f'{filename} does not exist.')
        return app.redirect(url_for('index'))
    if filename.endswith('.md'):
        path = os.path.join(g.data_dir, filename)
        with open(path, 'r') as f:
            html = markdown(f.read())
        return render_template('file.html', safe_content=html)
    return send_from_directory(g.data_dir, filename)

if __name__ == "__main__":
    x = os.environ.get('LS_DEV_MACHINE')  # requires `export LS_DEV_MACHINE=true` in .bashrc
    if x:
        # print("🔴")
        app.run(debug=True, port=5003)
    else:
        app.run(debug=False)


        