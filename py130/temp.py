print(list(map(lambda number: 2 * number, [1, 2, 3])))
print(list(map(lambda number: print(number) or 2 * number, [1, 2, 3])))

