'''


Write a test that will fail if lst and the return value of lst.process are different objects.

'''
self.assertIs(lst, lst.process)