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

