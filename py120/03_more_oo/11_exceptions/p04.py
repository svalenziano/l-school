try:
    num = float(input("Give me a positive number please. "))
    if num < 0:
        raise ValueError("Need positive number yo!")
except ValueError as e:
    print(f"ERROR: {e}")
else:
    print(f"Your number is: {num}!!!")