class Cat:
    counter = 0

    def __init__(self):
        self.__class__.counter += 1
        # GoodCat.counter = GoodCat.counter


class GoodCat(Cat):
    pass

#print(GoodCat.counter)          # 0

c_cat = Cat()
print(Cat.counter)      # 1
a_cat = GoodCat()
b_cat = GoodCat()
print(Cat.counter)      # ?             1
print(GoodCat.counter)       # ?        3