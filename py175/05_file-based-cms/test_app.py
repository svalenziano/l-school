import unittest
import os
from flask import Flask
from app import app

    

class TestApp(unittest.TestCase):
    def setUp(self):
        app.testing = True
        self.client = app.test_client()

    def test_index(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('about.txt', response.get_data(as_text=True))

    def test_file(self):
        with self.client.get('/history.txt') as response:
            self.assertEqual(response.status_code, 200)
            self.assertIn('Guido van Rossum', response.get_data(as_text=True))

    def test_unsafe_paths(self):
        response = self.client.get('/..')
        self.assertEqual(response.status_code, 302)
        response = self.client.get('/../')
        self.assertEqual(response.status_code, 404)
        response = self.client.get('/../..')
        self.assertEqual(response.status_code, 404)

    def test_nonexistent(self):
        response = self.client.get('/abc.txt')
        self.assertEqual(response.status_code, 302)
        response = self.client.get('/lorem_ipsum')
        self.assertEqual(response.status_code, 302)
        response = self.client.get('/fake.json')
        self.assertEqual(response.status_code, 302)

if __name__ == '__main__':
    unittest.main()