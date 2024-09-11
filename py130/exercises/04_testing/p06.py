'''




Write a unittest assertion that will fail unless employee.hire raises a NoExperienceError exception.

'''

with self.assertRaise(NoExperienceError):
    employee.hire()