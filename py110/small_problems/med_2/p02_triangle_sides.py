'''
P
    - INPUT = triangle side lengths as tuple with 3 elements
    - OUTPUT = 'equilateral', 'isosceles', 'scalene', or 'invalid'
    - Req
        ex
            Triangle is invalid if 
                longest side is longer than sum of shortest two sides 
E
D
A
    - if smallest two sides don't add up to largest side
        - sort sides.
        - if 1st + 2nd < 3rd:
            - return `invalid`
    - if len(set(sides)) == 1
        - equilateral
    - elif len(set(sides)) == 2
        - isoc
    - else:
        - scalene
C
'''

def triangle(side0, side1, side2):
    sides = sorted([side0, side1, side2])
    if sides[0] + sides[1] <= sides[2]:
        return 'invalid'
    if len(set(sides)) == 1:
        return 'equilateral'
    if len(set(sides)) == 2:
        return 'isosceles'
    else:
        return 'scalene'
    


print(triangle(3, 3, 3) == "equilateral")  # True
print(triangle(3, 3, 1.5) == "isosceles")  # True
print(triangle(3, 4, 5) == "scalene")      # True
print(triangle(0, 3, 3) == "invalid")      # True
print(triangle(3, 1, 1) == "invalid")      # True