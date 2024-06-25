import os

INVALID_MSG = "☹️  Invalid input, please try again."

DEELUXE_MSG = "Give me an integer greater than 0, \
or more than one integer separated by spaces:  "

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

def integer_is_valid_and_positive(integer):
    try:
        x = int(integer)
        if x > 0:
            return True
    except:
        return False
    return False

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

def convert_str_to_int(list_to_modify):
    '''
    Input: list of ints (strings)
    Operation: Convert each element from str to integer
    '''
    list_of_ints = []
    for element in list_to_modify:
        list_of_ints.append(int(element))
    list_to_modify.clear()
    list_to_modify.extend(list_of_ints)

def get_valid_numbers(message, message_invalid):
    '''
    Input accepts space-delimited string
    Output, list of integers (as strings)
    '''
    valid_return = None
    while valid_return == None:
        my_input = input(message).strip().lstrip('0')
        my_input = my_input.split(' ')
        # check to see if each string is a valid number 
        for element in my_input:
            if integer_is_valid_and_positive(element) == False:
                print(message_invalid)
                continue
        valid_return = True
    return my_input

    
def operate_on_sequence(sequence, operation):
    if operation == 's':
        return sum(sequence)
    if operation == 'p':
        product = 1
        for element in sequence:
            product *= element
        return product
    
def show_your_work(collection, operation, result):
    '''
    TODO:
    - Avoid use of global variable OPERATIONS
    - Use .join() method instead of the whack logic that I used
    '''
    operator = OPERATIONS[operation]['operator']
    string = f'{collection[0]}'
    index = 1
    while index < len(collection):
        string += f' {operator} {collection[index]}'
        index += 1
    string += f' = {result:,}'
    return string

def create_range(list_of_one):
    '''
    Input: list containing one integer
    Operate: mutate the list so that it contains a range of integers
        from 1 to the integer provided, inclusive
    '''
    my_range = list(range(1, list_of_one[0] + 1))
    list_of_one.clear()
    list_of_one.extend(my_range)

def main():
    clear_terminal()

    # get input
    list_of_numbers = get_valid_numbers(DEELUXE_MSG, INVALID_MSG)
    convert_str_to_int(list_of_numbers)
    
    print(repr(list_of_numbers).strip('[]'))

    operation = get_valid_input(OPERATION_MSG, INVALID_MSG, OPERATIONS.keys())

    if len(list_of_numbers) == 1:
        create_range(list_of_numbers)
    elif len(list_of_numbers) < 1:
        print('Something has gone terribly wrong')

    result = operate_on_sequence(list_of_numbers, operation)

    print(show_your_work(list_of_numbers, operation, result))



if __name__ == "__main__":
    main()
