'''
P
    PROBLEM: Create circular buffer than passess all of the LS Tests
    REQS
        Ex
            - Buffer size = arbitrary
            - Adding an object
                - if not full
                    - add to position immediately following newest element
                - if full
                    - replace oldest element
            - Removing an object
                - remove the oldest element
        IMPLICIT
            - put:
                see 'Adding' above
            - get:
                - remove and return the oldest element    
        QUESTIONS:
            - While adding, if 'position that immediately follows the most 
                recently added object' is full, what do you do?
'''
# E
'''
    print(buffer2.get() is None)         # True

    buffer2.put(1)
    buffer2.put(2)
    print(buffer2.get() == 1)            # True

    buffer2.put(3)
    buffer2.put(4)
    print(buffer2.get() == 2)            # True

    buffer2.put(5)
    buffer2.put(6)
    buffer2.put(7)

'''
# D
'''
    v1 👎
        `last_added` integer
            - update when an element is added 
        `oldest` integer
            - when oldest is removed, update to next-oldest?
            (This won't work bc you must relative ages of indexes in order for it to work)
    v2
        dict of indexes, value = object, age
            - ages start at None
            - obj start at None
            - when adding:
                - increment ages on all elements
                - 
    v3
        list of elements
        list of indexes, in order of age
    v4
        list of elements, init = all None
        list of ages, init = all None
        when adding:
            - 
            - increment all ages
    v5 (DRAFTED IN OBSIDIAN TO MAKE USE OF FOLDING FEATURE)
    - `cell` class:
        - Properties:
            - idx = integer (helpful, even though it's somewhat redundant.  ~~not necessary bc the `buffer` list contains this info?~~)
            - value = None
            - age = None
        - Behaviors:
            - value
            - age
    - buffer class:
        - State:
            - buffer = list of `cell` objects
        - Behaviors:
            - `is_full` returns Boolean, all positions are full?
                - `empty_cells` = list comprehension
                - if any cells are empty:
                    - return True
                - return False
            - `newest_idx` returns the idx 
                - create list of objects, sorted by age (sort using `key`)
                - return index of the first object
            - `oldest_idx` 
                - same as newest, above
            - `put` adds object to buffer
                - If not full
                    - Find the newest element
                        - Add number to the next cell
                - if full
                    - Find the idx of the oldest element
                    - Replace that element
            - `get` removes and returns the oldest element
A
    - oldest element [HELPER]
        - 
    - newest element [HELPER]
'''







# LS Tests
buffer = CircularBuffer(3)

print(buffer.get() is None)          # True

buffer.put(1)   # 1 _ _
buffer.put(2)   # 1 2 _
print(buffer.get() == 1)   # _ 2 _            # True

buffer.put(3)  # _ 2 3
buffer.put(4)  # 4 2 3
print(buffer.get() == 2)  # 4 3            # True

buffer.put(5)
buffer.put(6)
buffer.put(7)
print(buffer.get() == 5)             # True
print(buffer.get() == 6)             # True
print(buffer.get() == 7)             # True
print(buffer.get() is None)          # True

buffer2 = CircularBuffer(4)

print(buffer2.get() is None)         # True

buffer2.put(1)
buffer2.put(2)
print(buffer2.get() == 1)            # True

buffer2.put(3)
buffer2.put(4)
print(buffer2.get() == 2)            # True

buffer2.put(5)
buffer2.put(6)
buffer2.put(7)
print(buffer2.get() == 4)            # True
print(buffer2.get() == 5)            # True
print(buffer2.get() == 6)            # True
print(buffer2.get() == 7)            # True
print(buffer2.get() is None)         # True