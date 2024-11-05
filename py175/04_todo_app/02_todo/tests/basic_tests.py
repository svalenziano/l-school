import unittest
import importlib.util
import sys
import os

script_path = os.path.abspath('../utils.py')
spec = importlib.util.spec_from_file_location("your_module", script_path)
your_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(your_module)

class TodoListTest(unittest.TestCase):
    def setUp(self):
        self.lst = TodoList('my list')
    
    def test_list_is_valid(self):
        self.assertEqual(type(self.name), str)
        self.assertEqual(self.todos, [])