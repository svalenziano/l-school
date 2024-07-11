'''
MY SOLUTION FROM THE PREVIOUS PROBLEM WORKED FOR THIS ONE AS WELL
'''



def transpose(orig_matrix):
    transposed = []
    number_of_columns = range(len(orig_matrix[0]))
    for column_index in number_of_columns:
        orig_column = [row[column_index] for row in orig_matrix]
        transposed.append(orig_column)
    return transposed




# All of these examples should print True
print(transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]])
print(transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]])
print(transpose([[1]]) == [[1]])

matrix_3_by_5 = [
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
]
expected_result = [
    [1, 4, 3],
    [2, 3, 7],
    [3, 2, 8],
    [4, 1, 6],
    [5, 0, 2],
]

print(transpose(matrix_3_by_5) == expected_result)