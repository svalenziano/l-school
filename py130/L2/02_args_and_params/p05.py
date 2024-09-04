'''
Create a function named find_person that accepts any number of keyword arguments in which each key is someone's name and the value is their associated profession. The function should check whether any of the key/value pairs has a key of "Antonina" and then, if the key is found, print a message that shows Antonina's profession. Otherwise, it should say "Antonina not found". The function should not accept any positional arguments.
'''

def find_person(**kwargs):
    try:
        print(kwargs['Antonina'])
    except:
        print('Antonina not found')

people = {
    'Mel': 'Program Director',
    'Antonina': 'LS TA',
    'Steven': 'Designer builder guy',
    'Luna': 'Floofball',
    'Mario': 'Video game character'
}

find_person(**people)

del people['Antonina']

find_person(**people)