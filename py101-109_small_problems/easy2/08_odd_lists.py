


def method1():

    def oddities(input_list):
        # 'odd' elements are even index values
        indexes_to_return = range(0, len(input_list), 2)
        new_list = []
        for i in indexes_to_return:
            new_list.append(input_list[i])
        return new_list

    print(oddities([2, 3, 4, 5, 6]) == [2, 4, 6])  # True
    print(oddities([1, 2, 3, 4]) == [1, 3])        # True
    print(oddities(["abc", "def"]) == ['abc'])     # True
    print(oddities([123]) == [123])                # True
    print(oddities([]) == [])                      # True

def method2():

    def oddities(input_list):
        return input_list[::2]

    print(oddities([2, 3, 4, 5, 6]) == [2, 4, 6])  # True
    print(oddities([1, 2, 3, 4]) == [1, 3])        # True
    print(oddities(["abc", "def"]) == ['abc'])     # True
    print(oddities([123]) == [123])                # True
    print(oddities([]) == [])                      # True

if __name__ == '__main__':
    method1()
    print()
    method2()