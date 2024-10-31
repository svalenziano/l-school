from flask import Flask, render_template, redirect, url_for
import re
import sys

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    lst_of_chapter_names = f.readlines()

@app.route("/")
def index():
    return render_template('home.html', 
                           contents=lst_of_chapter_names, 
                           title="Table of Contents")

@app.route('/chapter/<num>')
def chapters(num):
    with open(f'book_viewer/data/chp{num}.txt', 'r') as f:
        chapter = f.read()
        # print(chapter[0:2000])

    return render_template('chapters.html', 
                           chapter=chapter,
                           contents=lst_of_chapter_names,
                           title=f'Chapter {num}',
                           chap_name=lst_of_chapter_names[int(num) - 1])



@app.route('/gimme/<num>')
def redir_chapter(num):
    return redirect(url_for('chapters', num=num))



@app.errorhandler(404)
def page_not_found(error):
    return redirect( url_for('index') ,)



# JINJA FILTERS!
def slugify(text:str):
    text = text.replace(' ', '-').lower()
    whitespace = re.compile(r'\s')
    return whitespace.sub('', text)

app.jinja_env.filters['slugify'] = slugify

def in_paragraphs(ugly_text:str):
    paragraphs = ugly_text.split('\n\n')
    text = [f"<p>{paragraph}</p>" for paragraph in paragraphs]
    return ''.join(text)
    # print(text)

app.jinja_env.filters['in_paragraphs'] = in_paragraphs

@app.route("/test")
def test():
    return type(app.jinja_env)

if __name__ == "__main__":
    app.run(debug=True, port=5003)

