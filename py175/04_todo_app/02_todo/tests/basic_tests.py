'''

THESE TESTS ARE NOT WORKING.  
I'M NOT SURE HOW TO IMPORT A MODULE USING A RELATIVE PATH.

'''

import unittest
import importlib.util
import os

# Define the relative path to the module
script_path = os.path.abspath('../utils.py')  # Adjust the path as needed

# Load the module
spec = importlib.util.spec_from_file_location("utils", script_path)  # Use a meaningful name
utils = importlib.util.module_from_spec(spec)
spec.loader.exec_module(utils)

class TodoListTest(unittest.TestCase):
    def setUp(self):
        self.lst = utils.TodoList('my list')  # Use the correct module name
    
    def test_list_is_valid(self):
        self.assertEqual(type(self.lst.name), str)  # Access the name attribute of self.lst
        self.assertEqual(self.lst.todos, [])  # Access the todos attribute of self.lst

if __name__ == '__main__':
    unittest.main()
