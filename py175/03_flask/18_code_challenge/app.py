import yaml 
import os.path
from flask import Flask, render_template, g, url_for

app = Flask(__name__)

'''
HELPERS
'''
@app.before_request
def import_users():
    users_path = os.path.join(app.static_folder, 'data/users.yaml')

    with open(users_path, 'r') as f:
        g.users_dict = yaml.safe_load(f)
    
    g.username_list = list(g.users_dict.keys())
    g.user_qty = len(g.username_list)
    
    # tally interests
    g.interests_set = set()
    for username in g.users_dict:
        interests = set(g.users_dict[username]['interests'])
        g.interests_set = g.interests_set.union(interests)
        print(f"{interests=}", "\n"
              f"{g.interests_set=}")
    g.interests_qty = len(g.interests_set)


'''
ROUTES
'''
@app.route('/')
def index():
    return app.redirect(url_for('users'))

@app.route('/users')
def users():
    return render_template('users.html', 
                           usernames=g.username_list)

@app.route('/user/<username>')
def user(username):
    email = g.users_dict[username].get('email')
    
    # Don't show current user in list of users
    usernames=g.username_list
    usernames.remove(username)

    interests = g.users_dict[username]['interests']
    return render_template('user.html', 
                           username=username, 
                           usernames=usernames,
                           email=email,
                           interests=interests)

if __name__ == '__main__':
    app.run(debug='true', port='5003')