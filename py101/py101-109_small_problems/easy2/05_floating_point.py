
def operate(num1, num2, operator):
    string_to_evaluate = f"{num1} {operator} {num2}"
    result = eval(string_to_evaluate)
    return string_to_evaluate + f" = {result}"

def main():
    first_no = input("==> Enter the first number plz: ") or 3.141529
    second_no = input("==> Enter the 2nd number plz: ") or 2.718282
    
    for i in ['+', '-', '*', '/', '//', '%', '**']:
        print("==> " + operate(first_no, second_no, i))

main()