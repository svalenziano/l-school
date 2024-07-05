'''


'''




from _10_convert_num_to_str import int_to_str, dig_to_str

def signed_integer_to_string(int_):
    if int_ > 0:
        sign = '+'
    elif int_ < 0:
        sign = '-'
    else:
        sign = ''
    return sign + int_to_str(abs(int_))

def tests():
    print(signed_integer_to_string(4321) == "+4321")  # True
    print(signed_integer_to_string(-123) == "-123")   # True
    print(signed_integer_to_string(0) == "0")         # True

tests()