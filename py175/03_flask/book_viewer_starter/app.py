from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
        toc = f.readlines()

    # for idx, line in enumerate(toc):
    #     toc[idx] = '<a href="#" class="pure-menu-link">' + line + '</a>'
    
    return render_template('index.html', contents=toc)

if __name__ == "__main__":
    app.run(debug=True, port=5003)