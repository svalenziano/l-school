'''
RESULT 🟢 not bad!  11.5 mins.  Had to fix my initial error

P
    INPUT = nxn matrix
    OUTPUT = TRANSPOSED MATRIX (column becomes row)
E
D
    new nested list(s)
A
    v1 high level
        - for each 'column', generate a row (list)
    
    v1 low level
        - comprehension
            - sublist item at index
            - for each index btw 0 and length of first sublist

'''
def transpose(matrix):
    width = len(matrix[0])
    height = len(matrix)
    result = [[matrix[row_idx][col_idx] 
               for row_idx in range(height)]
               for col_idx in range(width)]

    print(result)
    return result


def ls():
    matrix = [
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
    ]

    new_matrix = transpose(matrix)

    print(new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]) # True
    print(matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]])     # True

ls()