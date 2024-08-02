class CircularBuffer:
    def __init__(self, size):
        self.buffer = [None] * size
        self.next = 0
        self.oldest = 0

    def put(self, obj):
        next_item = (self.next + 1) % len(self.buffer)

        if self.buffer[self.next] is not None:
            self.oldest = next_item

        self.buffer[self.next] = obj
        self.next = next_item

    def get(self):
        value = self.buffer[self.oldest]
        self.buffer[self.oldest] = None
        if value is not None:
            self.oldest += 1
            self.oldest %= len(self.buffer)

        return value