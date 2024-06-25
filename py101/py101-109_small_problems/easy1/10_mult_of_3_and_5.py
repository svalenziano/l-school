

def multisum(ceiling):
    '''
    This works.  
    '''
    # create list w/ range()
    range_list = list(range(1, ceiling + 1))

    # if number isn't multiple of 3 or 5, remove it
    filtered_list = []
    for num in range_list:
        if (num % 3 == 0) or (num % 5 == 0):
            filtered_list.append(num)

    # sum all numbers in the list
    return sum(filtered_list)

def multisum_comprehension(ceiling):
    return sum([n for n in range(1, ceiling+1) if (n % 3 == 0) or (n % 5 ==0)])

def main():
    # These examples should all print True
    print(multisum(3) == 3)
    print(multisum(5) == 8)
    print(multisum(10) == 33)
    print(multisum(1000) == 234168)
    print()
    print(multisum_comprehension(3) == 3)
    print(multisum_comprehension(5) == 8)
    print(multisum_comprehension(10) == 33)
    print(multisum_comprehension(1000) == 234168)

if __name__ == '__main__':
    main()