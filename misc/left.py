
lst = [[1, 6, 7], [1, 5, 3, [9, 20, 5, 8]], [1, 8, 3]]

def sum_odd_numbers(list_obj):
    total = [num for num in list_obj if num % 2 == 1]
    return sum(total)

sorted_list = sorted(lst, key=sum_odd_numbers)
print(sorted_list)
