from flask import Flask, render_template, redirect, url_for, request
import re
import sys

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    lst_of_chapter_names = f.readlines()

def read_chapter(chapter_num:int):
    with open(f'book_viewer/data/chp{chapter_num}.txt', 'r') as f:
        chapter = f.read()
        # print(chapter[0:2000])
        return chapter
    
def chapters_matching(query:str):
    results = []
    for chap_num, chapter_name in enumerate(lst_of_chapter_names, 1):
        chapter_text = read_chapter(chap_num)
        print(query)
        if query in chapter_text:
            results.append({'chapter_num': chap_num, 
                            'chapter_name': chapter_name})
    return results


@app.route("/")
def index():
    return render_template('home.html', 
                           contents=lst_of_chapter_names, 
                           title="Table of Contents")

@app.route('/chapter/<num>')
def chapters(num):
    
    chapter = read_chapter(num)
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

@app.route('/search')
def search():
    query = request.args.get('query', '')
    results = chapters_matching(query)

    return render_template('search.html', query=query, results=results)


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

