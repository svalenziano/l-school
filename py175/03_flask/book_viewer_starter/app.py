from flask import Flask, render_template

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    toc = f.readlines()

@app.route("/")
def index():
    return render_template('index.html', contents=toc)

@app.route('/chapters/1')
def chap1():
    with open('book_viewer/data/chp1.txt', 'r') as f:
        chapter = f.readlines()

    return render_template('chapters.html', 
                           chapter=chapter,
                           contents=toc,
                           title='Chapter 1',)

if __name__ == "__main__":
    app.run(debug=True, port=5003)