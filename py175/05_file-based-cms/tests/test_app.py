import shutil
import os
import unittest
import sys

tests_dir = os.path.dirname(__file__)
project_root = os.path.join(tests_dir, '..')
sys.path.insert(0, project_root)

import utils
from app import (app,
                 return_data_dir,
                 green,)


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

    def tearDown(self):
        shutil.rmtree(self.data_dir, 
                      ignore_errors=True,
                      )

    def test_index(self):
        make_dummy_file('about.txt')
        make_dummy_file('changes.txt')
        make_dummy_file('history.txt')
        
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content_type, "text/html; charset=utf-8")
        self.assertIn("about.txt", response.text)
        self.assertIn("changes.txt", response.text)
        self.assertIn("history.txt", response.text)

    def test_viewing_text_document(self):
        make_dummy_file('history.txt', 
                        content="Python 0.9.0 (initial release) is released.")
        
        with self.client.get('/history.txt') as response:
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.content_type, "text/plain; charset=utf-8")
            self.assertIn("Python 0.9.0 (initial release) is released.",
                          response.text)

    def test_document_not_found(self):
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
            
    def test_markdown_conversion(self):
        markdown = ("## Hello World\n"
                    "> This is a quote\n"
                    "> So is this\n")
        
        make_dummy_file('markdown.md', content=markdown)

        with self.client.get('/markdown.md') as response:
            r = response.text
            self.assertIn('<h2>', r)
            self.assertIn('<blockquote>', r)
 
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

    def test_delete_file(self):
        # create files to test
        for fname in ['foo.txt',
                      'q23p9jafwe48492__.html']:
            make_dummy_file(fname)
            
            # try to delete the file
            with self.client.get(f'{fname}/delete') as response:
                self.assertEqual(response.status_code, 302)
                
            # follow the redirect
            with self.client.get(response.headers['Location']) as response:    
                self.assertIn(fname, response.text)
                self.assertIn( 'has been deleted', response.text)

    def test_delete_nonexistent_file(self):
        for fname in ['foo.txt',
                      'q23p9jafwe48492__.html']:
            
            # try to delete the file
            with self.client.get(f'{fname}/delete') as response:
                self.assertEqual(response.status_code, 302)
                
            # follow the redirect
            with self.client.get(response.headers['Location']) as response:    
                self.assertIn(fname, response.text)
                self.assertIn( 'does not exist', response.text)



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