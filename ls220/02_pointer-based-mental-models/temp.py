"""
- maxArea = 0
- Area: (right - left + 1) * height
- start pointers at beginning and end
- while l < r:
    - update maxArea as appropriate, using max()
    - if value at right is less than value at left:
        - move right
    - else:
        - move left
"""


def largestRectangleArea(heights) -> int:
    l = 0
    r = len(heights) - 1
    max_area = 0
    # calc_area = lambda l, r: (r - l + 1) * min(heights[l], heights[r])
    while l < r:
        this_area = (r - l) * min(heights[l], heights[r])
        max_area = max(max_area, this_area)
        print(f"{l=}, {r=}, {this_area=}, {max_area=}, {heights[l]=}, {heights[r]=}")
        if heights[l] < heights[r]:
            l += 1
        else:
            r -= 1
    return max_area


print(largestRectangleArea([2,1,5,6,2,3]))  # expect 10