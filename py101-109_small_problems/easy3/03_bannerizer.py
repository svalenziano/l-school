'''
TODO: 
    - Cleanup def make_message_multiline().  Improve so the 
      delete_trailing_line() function isn't necessary

'''


MESSAGES = [
    'To boldly go where no one has gone before.',
    'Well hey!',
    '',
    '66666666666666666666666666',
    '''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?''',
    'Well ok then.',
    '''This
    is
    a



    multiline thingy.
''',
    'Ok bye! 👋'
]

def horiz(width, _):
    print('+' + '+'.rjust(width, '-'))

def blank(width, _):
    print('|' + '|'.rjust(width))

def message_line(width, message):
    print('|' + message.center(width - 1) + '|')

def message_multiline(width, message):
    '''
    Input = list of strings, each representing a line of the message
    '''
    for line in message:
        print('|' + line.center(width - 1) + '|')

def remove_newlines(list_of_strings):
    for i in list_of_strings:
        i = 'o'
        # i = '🔴'.join(i.splitlines())

def return_split_index(max_line_length, line):
    '''
    line: string you wish to operate on
    max_line_length: lines will be split at whole words, no longer than
        this length
    return: index that can be used to split the line at a space

    todo: 
        - what if a single word exceeds the length of a whole line?
        - hyphenation
    '''
    index = max_line_length
    try:
        while not line[index].isspace() and index > 0:
            index -= 1
        return index
    except:
        return len(line)

def make_message_multiline(max_line_length, message):
    single_line = message.strip().splitlines(keepends = False)
    list_of_strings = []
    for line in single_line:
        line_index = 0
        while line_index < len(line):
            split_index = return_split_index(max_line_length, line)
            list_of_strings.append(line[:split_index].strip())
            line = line[split_index:]
            line_index = split_index
        list_of_strings.append(line.strip())
    return list_of_strings

def delete_trailing_line(list_):
    if len(list_) > 1 and list_[-1] == '':
        list_.pop(-1)

def print_fancy_box(width, message):
    pad = 8
    line_length = width - pad
    message = make_message_multiline(line_length, message)
    delete_trailing_line(message)
    # print each line using message_line()
    for function in [horiz, blank, message_multiline, blank, horiz]:
        function(width, message)

def test_examine_lines():
    for msg in MESSAGES:
        for line in make_message_multiline(60, msg):
            print(line)
# test_examine_lines()

def test_examine_lists():
    for msg in MESSAGES:
        print(make_message_multiline(60, msg))
# test_examine_lists()

def main():
    for msg in MESSAGES:
        print_fancy_box(60, msg)


if '__main__' in __name__:
    main()