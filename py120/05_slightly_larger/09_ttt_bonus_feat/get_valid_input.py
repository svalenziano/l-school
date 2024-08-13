
class Input:

    HELP_OPTIONS = ['h', 'help', '?,']
    QUIT_OPTIONS = ['q', 'quit']
    PROMPT = '>>>'

    def __init__(self, 
                 valid_choices=[], 
                 msg_txt='', 
                 invalid_txt='', 
                 help_txt='', 
                 delay=0):
        self.valid_choices = valid_choices
        self.msg_txt = msg_txt
        self.invalid_txt = invalid_txt
        self.help_txt = help_txt
        self.delay = delay
        self.goodbye = 'Goodbye!'
    
    def unalias_choice(self, valid_choices, choice):
        '''
        For each alias,
            Create a list of all valid_choices that start with that string
            If the length is 1
                Return the  valid_choice
            Otherwise
                Return invalid
        '''
        unaliased = [valid_choice for valid_choice in valid_choices
                     if valid_choice.startswith(choice)]
        if len(unaliased) == 1:
            return unaliased[0]
        if len(unaliased > 1):
            print(f"There's more than one choice that begins with {choice}, " +
                  "can you be more specific?")

    def get(self):
        while True:
            choice = input(self.msg_txt).strip().casefold()
            choice = self.unalias_choice(self.valid_choices, choice)
            if choice in self.valid_choices:
                return choice
            if choice in Input.HELP_OPTIONS:
                print(self.help_txt)
            elif choice in Input.QUIT_OPTIONS:
                print(self.goodbye)
                quit()
            else:
                print(self.invalid_txt)

        
if __name__ == '__main__':
    test = Input(valid_choices = ['rock', 'paper', 'scissors'], 
                      msg_txt = 'R, P, or S? ', 
                      invalid_txt = 'Not valid, sorry!', 
                      help_txt = 'You need help', 
                      delay = 0
                      )
    while True:
        print(Input.PROMPT, test.get())
    