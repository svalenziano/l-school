'''
RESULT = 🟢 Easy!
            Done in 7.5 mins.

P
    INPUT = matrix
    OUTPUT = rotated matrix
    SIDE EFFECTS = NONE
E
    3  4  1
    9  7  5

    9  3
    7  4
    5  1

    first row --> last col
    2nd row --> first col

D
    new nested list
A
    v1 high level
    - for each column of the orig list
        - append it, reversed, to the new list

    v1 low
    - for each col of orig list (get using comprehension)
    - reverse the column
    - append as row to result
'''
def rotate90(matrix):
    result = []
    width = len(matrix[0])
    height = len(matrix)
    for col_idx in range(width):
        col = [matrix[row_idx][col_idx] for row_idx in range(height)]
        col.reverse()
        result.append(col)
    return result


def ls():
    matrix1 = [
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
    ]

    matrix2 = [
        [3, 7, 4, 2],
        [5, 1, 0, 8],
    ]

    new_matrix1 = rotate90(matrix1)
    new_matrix2 = rotate90(matrix2)
    new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

    # These examples should all print True
    print(new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]])
    print(new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]])
    print(new_matrix3 == matrix2)

ls()