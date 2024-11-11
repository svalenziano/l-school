from flask import (Flask, 
                   render_template,
                   g)
import os
import os.path
from functools import wraps

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

@app.route("/")
@get_data_dir
def index():
    filenames = os.listdir(g.data_dir) 
    return render_template('index.html', filenames = filenames)

@app.route('/<filename>')
@get_data_dir
def file(filename):
    filepath = os.path.join(g.data_dir, filename)
    with open(filepath, 'r') as f:
        content = f.readlines()
    return render_template('file.html', content=content)

if __name__ == "__main__":
    x = os.environ.get('LS_DEV_MACHINE')  # requires `export LS_DEV_MACHINE=true` in .bashrc
    if x:
        print("🔴")
        app.run(debug=True, port=5003)
    else:
        app.run(debug=False)


        