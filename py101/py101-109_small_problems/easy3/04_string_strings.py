
# v01, works!
def stringy_v01(len):
    index = 0
    string = ''
    digit = '1'
    while index < len:
        string += digit
        if digit == '1':
            digit = '0'
        else:
            digit = '1'
        index += 1
    return string

# v02, more compact
def stringy(len):
    my_list = [('1' if index % 2 == 0 else '0') for index in range(0, len)]
    return ''.join(my_list)

def main():
    print(stringy(13))
    print(stringy(6) == "101010")           # True
    print(stringy(9) == "101010101")        # True
    print(stringy(4) == "1010")             # True
    print(stringy(7) == "1010101")          # True

if __name__ == '__main__':
    main()