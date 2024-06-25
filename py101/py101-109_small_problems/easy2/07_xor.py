def xor(left, right):
    return bool((left or right) and not (left and right))


def main():
    print(xor(5, 0) == True)
    print(xor(False, True) == True)
    print(xor(1, 1) == False)
    print(xor(True, True) == False)

if __name__ == '__main__':
    main()