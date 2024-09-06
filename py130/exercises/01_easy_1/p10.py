'''


Create a generator function that yields user input strings until the word "stop" is entered.
'''




def echo_generator():
    while True:
        _input = input("Gimme a word: ").casefold()
        if _input == 'stop':
            print('Bye!')
            break
        yield(_input)

for user_input in echo_generator():
    print(user_input)