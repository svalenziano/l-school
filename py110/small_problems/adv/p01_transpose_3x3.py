'''
P
    INPUT = matrix (nested list)
    OUTPUT = transposed matrix
    REQ
        EX
            - Create a new object (don't mutate the original)
        IMPL
            - All nested lists are of equal length
E
D
    ?
A
    V1, high level
        - For each column (a single index for each row)
            - Create list of 'column' elements (now it's a row)
            - Append the row (formerly a column) onto the list
        - Return the matrix
        - CONCLUSION: I started coding and got stuck.  Back to the drawing board.

    V2, see sketch
    
    
    SIMPLIFY?
C
'''


def transpose(orig_matrix):
    transposed = []
    number_of_columns = range(len(orig_matrix[0]))
    for column_index in number_of_columns:
        orig_column = [row[column_index] for row in orig_matrix]
        transposed.append(orig_column)
    return transposed


matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
]

new_matrix = transpose(matrix)

print(new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]) # True
print(matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]])     # True