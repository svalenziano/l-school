
# works!
def count_occurrences_v01(lst):
    counts =  {element: lst.count(element)
               for element in lst}
    for vehicle, count in counts.items():
        print(f"{vehicle} => {count}")

def count_occurrences(lst):
    counts = {}
    for vehicle in lst:
        counts.setdefault(vehicle, 0)
        counts[vehicle] += 1
    for vehicle, count in counts.items():
        print(f"{vehicle} => {count}")

# LS TESTS
vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
            'motorcycle', 'motorcycle', 'car', 'truck']

count_occurrences(vehicles)

'''
EXPECTED OUTPUT
# your output sequence may appear in a different sequence
car => 4
truck => 3
SUV => 1
motorcycle => 2
'''