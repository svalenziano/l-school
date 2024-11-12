import os
import unittest
from app import (app,
                 return_data_dir,)


def make_dummy_file(filename):
    filepath = os.path.join(return_data_dir(), filename)
    lipsum = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    "sed do eiusmod tempor incididunt ut labore et dolore magna "
    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
    "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis "
    "aute irure dolor in reprehenderit in voluptate velit esse cillum "
    "dolore eu fugiat nulla pariatur. Excepteur sint occaecat "
    "cupidatat non proident, sunt in culpa qui officia deserunt "
    "mollit anim id est laborum.")
    with open(filepath, 'w') as f:
        f.write(lipsum)

def delete_dummy_file(filename):
    filepath = os.path.join(return_data_dir(), filename)
    os.remove(filepath)

class CMSTest(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        self.client = app.test_client()

    def test_index(self):
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content_type, "text/html; charset=utf-8")
        self.assertIn("about.txt", response.text)
        self.assertIn("changes.txt", response.text)
        self.assertIn("history.txt", response.text)

    def test_viewing_text_document(self):
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
        with self.client.get('/markdown_test.md') as response:
            r = response.text
            self.assertIn('<h2>', r)
            self.assertIn('<blockquote>', r)
 
    def test_editing_document(self):
        '''
        A fairly basic test that ensures that `<textarea` 
        and `<button type="submit" are in the Flask response.
        '''
        response = self.client.get("/changes.txt/edit")
        self.assertEqual(response.status_code, 200)
        self.assertIn("<textarea", response.text)
        self.assertIn('<button type="submit"', response.text)

    def test_updating_document(self):
        # SETUP
        filename = 'tktk_testing_file.txt'
        make_dummy_file(filename)
        
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


if __name__ == '__main__':
    unittest.main()