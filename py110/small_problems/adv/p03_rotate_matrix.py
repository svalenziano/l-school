def rotate90(orig_matrix):
    rotated = []
    number_of_columns = range(len(orig_matrix[0]))
    for column_index in number_of_columns:
        orig_column = [row[column_index] for row in orig_matrix]
        # Last column becomes last row
        rotated.append(list(reversed(orig_column)))
    return rotated


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