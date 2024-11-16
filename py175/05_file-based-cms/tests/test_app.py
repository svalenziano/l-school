import shutil
import os
import unittest
import sys
from functools import wraps

tests_dir = os.path.dirname(__file__)
project_root = os.path.join(tests_dir, '..')
sys.path.insert(0, project_root)

import utils
from utils import (return_data_dir,
                   red, green, blue,)
from app import (app,
                 session,)


VALID_FILENAMES = [
            '.hello.py',
            'hello_world.txt',
            'VERY_SCREAMY.TXT',
            'hello-world-12340.txt',
            "hello-'world'.html",
            '1.a',
            ]

INVALID_FILENAMES = [
            '/../big_trouble.txt',
            'big..trouble.txt',
            'hello.',
            '!.txt',
            ]

### HELPER METHODS
    # tktk    

### TESTS

def make_dummy_file(filename, content=''):
    filepath = os.path.join(return_data_dir(), filename)
    if content == 'dummy':
        content = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                    "sed do eiusmod tempor incididunt ut labore et dolore magna "
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                    "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis "
                    "aute irure dolor in reprehenderit in voluptate velit esse cillum "
                    "dolore eu fugiat nulla pariatur. Excepteur sint occaecat "
                    "cupidatat non proident, sunt in culpa qui officia deserunt "
                    "mollit anim id est laborum.")
    with open(filepath, 'w') as f:
        f.write(content)

def delete_dummy_file(filename):
    filepath = os.path.join(return_data_dir(), filename)
    os.remove(filepath)

class CMSTest(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.client = app.test_client()
        self.data_dir = return_data_dir()
        os.makedirs(self.data_dir, exist_ok=True)
        utils.write_test_login_yaml()

    def tearDown(self):
        shutil.rmtree(self.data_dir, 
                      ignore_errors=True,
                      )
        
    def magic_login(self):
        valid_logins = utils.get_valid_logins()
        user, pword = valid_logins.popitem()
        with self.client.session_transaction() as session:
            session[user] = pword
    
    def magic_login_decorator(f):
        @wraps(f)
        def decorated_func(self, *args, **kwargs):
            self.magic_login()
            return f(self, *args, **kwargs)
        return decorated_func

    def test_index(self):
        
        make_dummy_file('about.txt')
        make_dummy_file('changes.txt')
        make_dummy_file('history.txt')
        
        # TEST WITHOUT LOGIN
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content_type, "text/html; charset=utf-8")
        self.assertIn('Login', response.text)

        # LOGIN AND TEST AGAIN
        self.magic_login()
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content_type, "text/html; charset=utf-8")
        self.assertIn("about.txt", response.text)
        self.assertIn("changes.txt", response.text)
        self.assertIn("history.txt", response.text)


    @magic_login_decorator
    def test_viewing_text_document(self):
        make_dummy_file('history.txt', 
                        content="Python 0.9.0 (initial release) is released.")
        
        # self.magic_login()
        with self.client.get('/history.txt') as response:
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.content_type, "text/plain; charset=utf-8")
            self.assertIn("Python 0.9.0 (initial release) is released.",
                          response.text)

    @magic_login_decorator
    def test_document_not_found(self):
        # self.magic_login()
        # Attempt to access a nonexistent file and verify a redirect happens
        with self.client.get("/notafile.ext") as response:
            self.assertEqual(response.status_code, 302)

        # Verify redirect and message handling works
        with self.client.get(response.headers['Location']) as response:
            self.assertEqual(response.status_code, 200)
            self.assertIn("notafile.ext does not exist",
                          response.text)

        # Assert that a page reload removes the message
        with self.client.get("/") as response:
            self.assertNotIn("notafile.ext does not exist",
                             response.text)
            
    @magic_login_decorator
    def test_markdown_conversion(self):
        markdown = ("## Hello World\n"
                    "> This is a quote\n"
                    "> So is this\n")
        
        make_dummy_file('markdown.md', content=markdown)

        with self.client.get('/markdown.md') as response:
            r = response.text
            self.assertIn('<h2>', r)
            self.assertIn('<blockquote>', r)
 
    @magic_login_decorator
    def test_editing_document(self):
        '''
        A fairly basic test that ensures that `<textarea` 
        and `<button type="submit" are in the Flask response.
        '''
        make_dummy_file('changes.txt', content='dummy')
        response = self.client.get("/changes.txt/edit")
        self.assertEqual(response.status_code, 200)
        self.assertIn("<textarea", response.text)
        self.assertIn('<button type="submit"', response.text)

    @magic_login_decorator
    def test_updating_document(self):
        # SETUP
        filename = 'tktk_testing_file.txt'
        make_dummy_file(filename, content='dummy')
        
        # EXECUTE AND ASSERT
        response = self.client.post(f"/{filename}/save",
                                    data={'raw_file': "new content"})
        self.assertEqual(response.status_code, 302)

        follow_response = self.client.get(response.headers['Location'])
        self.assertIn("has been updated",
                      follow_response.text)

        with self.client.get(f"/{filename}") as content_response:
            self.assertEqual(content_response.status_code, 200)
            self.assertIn("new content",
                          content_response.text)

        # TEARDOWN
        delete_dummy_file(filename)

    @magic_login_decorator
    def test_create_invalid_filenames(self):
        for invalid_filename in INVALID_FILENAMES:
            with self.client.get("/new") as response:
                self.assertIn('Create', response.text)

            with self.client.post('/new',
                                  data={
                                      'filename': invalid_filename,
                                  }) as response:
                self.assertEqual(response.status_code, 422)
                self.assertIn('is invalid', response.text)

    @magic_login_decorator
    def test_delete_file(self):
        # self.magic_login()
        
        # create files to test
        for fname in ['foo.txt',
                      'q23p9jafwe48492__.html']:
            make_dummy_file(fname)
            
            # try to delete the file
            with self.client.post(f'/delete', data={
                'file_to_delete': fname,
            }) as response:
                self.assertEqual(response.status_code, 302)
                
            # follow the redirect
            with self.client.get(response.headers['Location']) as response:    
                self.assertIn(fname, response.text)
                self.assertIn( 'has been deleted', response.text)

    @magic_login_decorator
    def test_delete_nonexistent_file(self):
        
        for fname in ['foo.txt',
                      'q23p9jafwe48492__.html']:
            
            # try to delete the file
            with self.client.post(f'/delete', data={
                'file_to_delete': fname,
            }) as response:
                self.assertEqual(response.status_code, 422)
                
            # follow the redirect
            with self.client.get(response.headers['Location']) as response:    
                self.assertIn(fname, response.text)
                self.assertIn( 'Failed to delete', response.text)

    def test_signin_form(self):
        response = self.client.get('/login')
        self.assertEqual(response.status_code, 200)
        self.assertIn("<input", response.text)
        self.assertIn('<button type="submit"', response.text)

    def test_signin(self):
        username = 'admin'
        response = self.client.post('/login',
                                    data={
                                        'username': username,
                                        'password': 'secret',
                                    },
                                    follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn("Welcome", response.text)
        self.assertIn("Logged in as", response.text)
        self.assertIn(username, response.text)

    def test_signin_with_bad_credentials(self):
        response = self.client.post('/login',
                                    data={
                                        'username': 'guest',
                                        'password': 'shhhh',
                                    })
        self.assertEqual(response.status_code, 422)
        self.assertIn("Invalid login credentials", response.get_data(as_text=True))

    @unittest.skip
    @magic_login_decorator
    def test_signout(self):
        # self.client.post('/login',
        #                  data={'username': 'admin', 'password': 'secret'},
        #                  follow_redirects=True)
        response = self.client.post('/users/signout', follow_redirects=True)
        self.assertIn("You have been signed out",
                      response.get_data(as_text=True))
        self.assertIn("Sign In", response.get_data(as_text=True))

class UtilsTest(unittest.TestCase):

    def test_valid_filename_chars(self):
        self.assertTrue(utils.valid_filename_chars('hello_world-1.txt'))
        self.assertFalse(utils.valid_filename_chars('!@#$%^&*'))
        self.assertFalse(utils.valid_filename_chars('hello%world'))

    '''
    Skip for now bc the 'INVALID_FILENAMES' constant isn't
    setup to test it correctly.
    '''
    @unittest.skip
    def test_is_valid_filename(self):
        for fname in INVALID_FILENAMES:
            self.assertTrue(utils.is_valid_filename(fname))
        for fname in VALID_FILENAMES:
            self.assertFalse(utils.is_valid_filename(fname))

if __name__ == '__main__':
    green('Running tests***********************************************')
    unittest.main()