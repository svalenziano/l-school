from flask import (Flask, 
                   render_template)
import os
import os.path

app = Flask(__name__)

@app.route("/")
def index():
    data_dir = os.path.join(os.path.abspath(app.root_path), "./cms/data")
    filenames = os.listdir(data_dir) 
    return render_template('index.html', filenames = filenames)

if __name__ == "__main__":
    x = os.environ.get('LS_DEV_MACHINE')  # requires `export LS_DEV_MACHINE=true` in .bashrc
    if x:
        print("🔴")
        app.run(debug=True, port=5003)
    else:
        app.run(debug=False)