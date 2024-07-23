'''
RESULT = 🟢 DONE IN 20 MINS!  
            It was easy when I abandoned my overcomplication and figured out I could use 
            a 'while' loop

P
    input = list
    output = none
    return = none
    side effect = mutate list
    reqs
        ex
        impl
E
D
    existing list
A
    v1
    [MAIN FUNC]
    while True
    for each index between zero and the last index minus one
        check to see if next element is larger than element at index
        if yes
            use slice syntax to flip the elements
            continue (with next iteration)
        if you reach end of list:
            return the list

    [SKETCH]
    swap occurred = None (TBD)
    while swap_occurred is not equal to False
        do stuff
        if swap happens
            swap_occurred  = True
        if you reach end, 
            return the list
        swap_occurred = None (reset back to TBD)

    v2
    [MAIN FUNC]
    idx = 0
    while idx is les than last index minus one
        check to see if next element is larger than element at index
        if yes
            use slice syntax to flip the elements
            continue (with next iteration)
        if no
            increment index
    return lst
C
'''

def bubble_sort(lst):
    idx = 0
    while idx < len(lst) - 1:
        left = lst[idx]
        right = lst[idx + 1]
        if left > right:
            lst[idx] = right
            lst[idx + 1] = left
            idx = 0
        else:
            idx += 1
    return lst
                


def ls():
    lst1 = [5, 3]
    bubble_sort(lst1)
    print(lst1 == [3, 5])                   # True

    lst2 = [6, 2, 7, 1, 4]
    bubble_sort(lst2)
    print(lst2 == [1, 2, 4, 6, 7])          # True

    lst3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel',
            'Kim', 'Bonnie']
    bubble_sort(lst3)

    expected = ["Alice", "Bonnie", "Kim", "Pete",
                "Rachel", "Sue", "Tyler"]
    print(lst3 == expected)                 # True

ls()