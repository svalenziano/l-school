'''


Create a generator function that yields user input strings until the word "stop" is entered.
'''



'''
P
E
D
A
    - Get input from user
    - If stop is entered, return
'''


def echo_generator():
    while True:
        _input = input("Gimme a word: ").casefold()
        if _input == 'stop':
            print('Bye!')
            return False
        print(f"I heard {_input}.")
        # yield(_input)

echo_generator()