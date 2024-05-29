import os

INVALID_MSG = "☹️  Invalid input, please try again."

INTEGER_MSG = "Please input an integer greater than 0:  "

OPERATION_MSG = \
"Enter 's' to computer the sum, or 'p' to compute the product.  "

OPERATIONS = { 's' : 
                     {'result' : 'sum',
                      'operator' : '+' },
               'p' : 
                     {'result' : 'product',
                      'operator' : '*' },
}


def clear_terminal():
    os.system('cls' if os.name=='nt' else 'clear')


def get_positive_int(message, message_invalid):
    valid_int = None
    while valid_int == None:
        try:
            valid_int = abs(int(input(message)))
            if valid_int <= 0:
                raise ValueError
            return valid_int
        except:
            print(message_invalid)
            valid_int = None

def get_valid_input(message, message_invalid, valid_options):
    valid_return = None
    while valid_return == None:
        try:
            valid_return = input(message).casefold()
            if valid_return in valid_options:
                return valid_return
            else:
                raise ValueError
        except:
            print(message_invalid)
            valid_return = None
    
def operate_on_sequence(sequence, operation):
    if operation == 's':
        return sum(sequence)
    if operation == 'p':
        product = 1
        for element in sequence:
            product *= element
        return product
    
def show_your_work(collection, operation, result):
    operator = OPERATIONS[operation]['operator']
    string = f'{collection[0]}'
    index = 1
    while index < len(collection):
        string += f' {operator} {collection[index]}'
        index += 1
    string += f' = {result:,}'
    return string

def main():
    clear_terminal()

    integer = get_positive_int(INTEGER_MSG, INVALID_MSG)

    my_range = list(range(1, integer + 1))

    operation = get_valid_input(OPERATION_MSG, INVALID_MSG, OPERATIONS.keys())

    result = operate_on_sequence(my_range, operation)

    print(f"The {OPERATIONS[operation]['result']} of the integers between \
1 and {integer} is {result:,}")
    
    print(show_your_work(my_range, operation, result))



if __name__ == "__main__":
    main()
