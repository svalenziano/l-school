'''
https://launchschool.com/exercises/fddf66ac
'''

def is_double_number(integer):
    string = str(integer)
    midpoint = len(string) // 2
    first_half = string[:midpoint]
    second_half = string[midpoint:]
    return first_half == second_half

def twice(integer):
    if is_double_number(integer):
        return integer
    else:
        return integer * 2

def main():
    print(twice(37) == 74)                  # True
    print(twice(44) == 44)                  # True
    print(twice(334433) == 668866)          # True
    print(twice(444) == 888)                # True
    print(twice(107) == 214)                # True
    print(twice(103103) == 103103)          # True
    print(twice(3333) == 3333)              # True
    print(twice(7676) == 7676)              # True

if __name__ == '__main__':
    main()



