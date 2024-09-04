file = open('output.txt', 'a')
file.write('Hello, world!\n')

lines = ['First line\n',
         'Second line\n']
file.writelines(lines)

file.close()