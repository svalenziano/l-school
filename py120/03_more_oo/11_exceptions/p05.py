class NegativeNumberError(ValueError):
    def __init__(self, message=""):
        if not message:
            message = "Value is less than zero.  Positive number expected."
        super().__init__(message)


num = float(input("Give me a positive number please. "))
if num < 0:
    raise NegativeNumberError
else:
    print(f"Your number is: {num}!!!")