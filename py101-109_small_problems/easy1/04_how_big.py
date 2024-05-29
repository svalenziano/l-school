SQ_METERS_TO_SQ_FEET = 10.7639  # 1 square meter == 10.7639 square feet
INVALID_INPUT_MSG = "☹️  Invalid input, please try again."

def input_positive_float(message, message_invalid):
    my_float = None
    while my_float == None:
        try:
            my_float = abs(float(input(message)))
            return my_float
        except:
            print(message_invalid)
    

# get length
room_length = input_positive_float(
    message = "What's the LENGTH of the room? ",
    message_invalid = INVALID_INPUT_MSG,
)

# get width
room_width = input_positive_float(
    message = "What's the WIDTH of the room? ",
    message_invalid = INVALID_INPUT_MSG,
)

# print len and width
print(f'Length = {room_length} meters')
print(f'Width  = {room_width} meters')

# calc area in meters and in feet
room_area_square_meters = room_length * room_width
room_area_square_feet = room_area_square_meters * SQ_METERS_TO_SQ_FEET

# print
print(f"Area = {room_area_square_meters:,.1f} square meters \
({room_area_square_feet:,.1f} square feet)")
