from flask import Flask, render_template

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    lst_of_chapter_names = f.readlines()

@app.route("/")
def index():
    return render_template('home.html', 
                           contents=lst_of_chapter_names, 
                           title="Table of Contents")

@app.route('/disp-chap/<num>')
def chapters(num):
    with open(f'book_viewer/data/chp{num}.txt', 'r') as f:
        chapter = f.readlines()

    return render_template('chapters.html', 
                           chapter=chapter,
                           contents=lst_of_chapter_names,
                           title=f'Chapter {num}',
                           chap_name=lst_of_chapter_names[int(num) - 1])

@app.route("/show/<name>/<content>")
def show(name, content):
    return render_template('test.html', test=name, content=content)

if __name__ == "__main__":
    app.run(debug=True, port=5003)