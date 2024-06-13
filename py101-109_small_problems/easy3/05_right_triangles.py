'''
Prompt: 
https://launchschool.com/exercises/b9ea5da1
'''

def triangle(height):
    '''
    height: integer
    '''
    for i in range(0, height):
        stars = '*' * (i + 1)
        print(stars.rjust(height))

def main():
    for i in [5, 9, 42]:
        print()
        triangle(i)
        print()

if __name__ == '__main__':
    main()
