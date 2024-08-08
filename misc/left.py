try:
    open("no_such_file.txt", "r")
except OSError as e:
    print(f'Error number: {e.errno}, Error message: {e.strerror}')
    print(f'File: {e.filename}')
# Error number: 2, Error message: No such file or directory
# File: no_such_file.txt