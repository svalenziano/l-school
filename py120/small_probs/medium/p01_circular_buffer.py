class CircularBuffer:
    def __init__(self, size):
        self.buffer = [None] * size
        self.next = 0     # pointer to next location where object will be inserted
        self.oldest = 0   # pointer to oldest object in buffer

    def put(self, obj):
        next_item = (self.next + 1) % len(self.buffer) # gets next index, wraps around to zero, if necessary

        if self.buffer[self.next] is not None:  # if the next index isn't empty
            self.oldest = next_item             # update `oldest` pointer 

        self.buffer[self.next] = obj            # insert obj into buffer
        self.next = next_item                   # update `next` pointer

    def get(self):
        value = self.buffer[self.oldest]        # grab value from `oldest` index
        self.buffer[self.oldest] = None         # clear buffer at `oldest` index
        if value is not None:                   
            self.oldest += 1
            self.oldest %= len(self.buffer)

        return value