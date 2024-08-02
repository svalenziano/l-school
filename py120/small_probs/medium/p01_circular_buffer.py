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
    v5 (DRAFTED IN OBSIDIAN SCRATCHPAD TO MAKE USE OF FOLDING FEATURE)

    
A
    - oldest element [HELPER]
        - 
    - newest element [HELPER]
'''

# SV Code
# Obj is short for 'Object', as in, a Python Object
class Obj:
    def __init__(self, idx, value=None):
        self._idx = idx
        self.value = value
        self._age = None
    
    def __repr__(self):
        return str(self.value)

    @property
    def idx(self):
        return self._idx

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, value):
        self._value = value

    @property
    def age(self):
        return self._age

    def increment_age(self):
        # only increment if there's a value
        if self.value != None:
            if self.age == None:
                self._age = 1
            else:
                self._age += 1

    
    def __lt__(self, other):
        return self.age < other.age

class CircularBuffer:
    def __init__(self, qty_cells):
        self._buffer = [Obj(idx=index)
                        for index in range(0, qty_cells)]
    
    def __str__(self):
        return str(self.buffer)

    @property
    def sorted_by_age(self):
        cells_with_ages = [obj
                           for obj in self.buffer
                           if obj.age != None]
        return sorted(cells_with_ages)

    @property
    def buffer(self):
        return self._buffer

    @property
    def is_full(self):
        empty_cells = [obj
                       for obj in self.buffer
                       if obj.value == None]
        if empty_cells:
            return False
        return True
    
    @property
    def is_empty(self):
        for cell in self.buffer:
            if cell.value != None:
                return False
        return True                

    @property
    def idx_after_newest_idx(self):
        sorted_buffer = self.sorted_by_age
        if sorted_buffer:
            newest_idx = sorted_buffer[0].idx
            if newest_idx + 1 >= len(self.buffer):
                return 0
            return newest_idx + 1
        return 0
    
    @property
    def oldest_idx(self):
        sorted_buffer = self.sorted_by_age
        if sorted_buffer:
            return sorted_buffer[-1].idx
        return 0
    
    def update_value(self, idx, value):
        self._buffer[idx].value = value
    
    def replace_object(self, idx, object):
        self._buffer[idx] = object

    def remove_object(self, idx):
        '''
        Replaces the object with an 'empty' Obj
        (Doesn't actually remove the object)
        '''
        self._buffer[idx] = Obj(idx)
        
    def put(self, new_value):
        if self.is_empty:
            self.update_value(idx = 0, 
                              value = new_value)
        elif self.is_full:
            oldest_idx = self.oldest_idx
            self.replace_object(idx=oldest_idx, 
                                object=Obj(idx=oldest_idx, value=new_value))
        else:
            self.update_value(idx = self.idx_after_newest_idx,
                              value = new_value)
        for obj in self.buffer:
                obj.increment_age()
    
    def get(self):
        old_idx = self.oldest_idx
        oldest_value = self.buffer[old_idx].value
        self.remove_object(old_idx)
        return oldest_value

    

        

# SV Tests
# buffer = CircularBuffer(3)
# # print(f"Buffer is empty? {buffer.all_cells_empty}")
# # print(b.buffer)
# # print(b.sorted_by_age)
# # print(b.is_full)
# # print(b.newest_index)
# buffer.put(1)   # 1 _ _
# # print(f"Buffer is empty? {buffer.all_cells_empty}")
# print(buffer)

# buffer.put(2)   # 1 2 _
# print(buffer)

# # print(f"Buffer is empty? {buffer.all_cells_empty}")
# buffer.put(3)
# print(buffer)

# buffer.put(4)
# print(buffer)
# print(buffer.get() == 1)   # _ 2 _            # True

# buffer.put(3)  # _ 2 3
# buffer.put(4)  # 4 2 3
# print(buffer.get() == 2)  # 4 3            # True


# c = [Cell(idx)
    #  for idx in range(0,5)]
# c = Cell(0)
# c.value = 666
# print(c.value)
# c.increment_age()
# c.increment_age()
# print(c.age)


# LS Tests
buffer = CircularBuffer(3)

# print(buffer.get() is None)          # True

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