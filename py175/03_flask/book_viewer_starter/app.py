from flask import Flask, render_template

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    toc = f.readlines()

@app.route("/")
def index():
    return render_template('home.html', contents=toc, title="Table of Contents")

@app.route('/chapters/<num>')
def chap(num):
    with open(f'book_viewer/data/chp{num}.txt', 'r') as f:
        chapter = f.readlines()

    return render_template('chapters.html', 
                           chapter=chapter,
                           contents=toc,
                           title=f'Chapter {num}',)

@app.route("/show/<name>/<content>")
def show(name, content):
    return render_template('test.html', test=name, content=content)

if __name__ == "__main__":
    app.run(debug=True, port=5003)