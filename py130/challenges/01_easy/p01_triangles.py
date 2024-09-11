'''
P
    PROBLEM: Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

    REQS, EXPLICIT
        Triangle classifications
            - An equilateral triangle has all three sides the same length.
            - An isosceles triangle has exactly two sides of the same length.
            - A scalene triangle has all sides of different lengths.
        Side requirements
            - For every side: length > 0
            - For every combination of side lengths, side 1 + side 2 > side 3

    REQS, IMPLICIT (examining tests):
        Properties:
            .kind
                'equilateral'
                'isosceles'
                'scalene'
        - raise ValueError if side length is <= 0
        - raise ValueError if triangle isn't valid (side 1 + side 2 > side 3)


E
    See /p01_triangles_tests.py
D
    Custom Triangle class
        sides = list of floats/ints
        .kind

A
'''

class Triangle:
    def __init__(self, side1, side2, side3):
        self._set_sides(side1, side2, side3)
    
    @property
    def kind(self):
        side_set = set(self._sides)
        unique_lengths = len(side_set)
        match unique_lengths:
            case 1:
                return 'equilateral'
            case 2:
                return 'isosceles'
            case 3:
                return 'scalene'
            case _:
                raise ValueError('Triangle has too many sides')

    def _set_sides(self, s1, s2, s3):
        '''
        For each side:
            - The other two sides must be longer than the side

        For each index in a range of length (self.sides):
            - Make a copy of _sides
            - Get the side at the index using pop
            - Compare the side to the sum of the remaining sides
        '''
        self._sides = (s1, s2, s3)
        self._test_sides()
        
    def _test_sides(self):
            
            # length must be greater than 0
        for side in self._sides:
            if side <= 0:
                raise ValueError("Side length must be greater than 0")
            
        # For every combination of side lengths, side 1 + side 2 > side 3
        for idx in range(len(self._sides)):
            sides = list(self._sides)
            side = sides.pop(idx)
            if side >= sum(sides):
                raise ValueError("For every combination of side lengths, " 
                                 "side 1 + side 2 > side 3")
            

if __name__ == '__main__':
    Triangle(1,2,2.9999)
    Triangle(1,2,0)



