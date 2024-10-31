from flask import Flask, render_template, redirect, url_for, request
import re
import sys

app = Flask(__name__)

with open('book_viewer/data/toc.txt', 'r', encoding='utf-8') as f:
    lst_of_chapter_names = f.readlines()

def read_chapter_str(chapter_num:int):
    with open(f'book_viewer/data/chp{chapter_num}.txt', 'r') as f:
        chapter = f.read()
        return chapter

def read_chapter_lst(chapter_num:int):
    with open(f'book_viewer/data/chp{chapter_num}.txt', 'r') as f:
        chapter = f.readlines()
        return chapter
    
def split_into_paragraphs(text:str):
    '''
    Splits text at double newlines
    '''
    return text.split('\n\n')
    
def chapters_matching(query:str):
    results = []
    for chap_num, chapter_name in enumerate(lst_of_chapter_names, 1):
        chapter_text = read_chapter_str(chap_num)
        if query in chapter_text:
            chapter_results = {'chapter_num': chap_num, 
                                'chapter_name': chapter_name,
                                'paragraphs': [] }
            for p_num, p_text in enumerate(split_into_paragraphs(chapter_text)):
                if query in p_text:
                    chapter_results['paragraphs'].append({'p_num': p_num,
                                                          'p_text': p_text})
                    print(p_text[0:50])
            results.append(chapter_results)
    return results


@app.route("/")
def index():
    return render_template('home.html', 
                           contents=lst_of_chapter_names, 
                           title="Table of Contents")

@app.route('/chapter/<num>')
def chapters(num):
    
    chapter = read_chapter_str(num)
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
    text = [f"<p id='{idx}'>{paragraph}</p>" 
            for idx, paragraph 
            in enumerate(paragraphs, 1)]
    return ''.join(text)
    # print(text)

app.jinja_env.filters['in_paragraphs'] = in_paragraphs

@app.route("/test")
def test():
    return type(app.jinja_env)

if __name__ == "__main__":
    app.run(debug=True, port=5003)

