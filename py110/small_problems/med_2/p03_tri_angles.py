'''
P
    - input = 3 integers representing the angles of a triangle
    - output = 'right', 'acute', 'obtuse', or 'invalid'
    - reqs
        -explicit
            - if sum of angles != 180, it's invalid
            - if one angle is 90, it's a right triangle
            - if one angle is greater than 90, it's obtuse
            - otherwise it's acute
        - implicit
            - integers only (based on examples)
E
D
A
C
'''

def triangle(side0:int, side1:int, side2:int):
    sides = sorted([side0, side1, side2])
    if sum(sides) != 180 or min(sides) <= 0:
        return 'invalid'
    if 90 in sides:
        return 'right'
    if max(sides) > 90:
        return 'obtuse'
    return 'acute'


print(triangle(60, 70, 50) == "acute")      # True
print(triangle(30, 90, 60) == "right")      # True
print(triangle(120, 50, 10) == "obtuse")    # True
print(triangle(0, 90, 90) == "invalid")     # True
print(triangle(50, 50, 50) == "invalid")    # True