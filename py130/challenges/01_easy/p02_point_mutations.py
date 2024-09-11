'''
P
    PROB: 
        Calc Hamming dist btw two DNA Strands
    In
    Out
    REQS
        Ex
            - Given two sequences of unequal length, calc, the distance over the shorter length
        Impl
            - original strand (string object within class) should be unaffected
    Qs
E
    See p02t.py
D
    class DNA
        __init__(string)
        .hamming_distance(string)
A

'''

class DNA:
    def __init__(self, seq:str):
        self._sequence = seq
    
    def hamming_distance(self, compare_seq:str):
        '''
        ALG HIGH LEVEL
            - Get length of shorter string
            - Compare shorter strings
            - return integer
        ALG LOW LEVEL
            - length = length of shorter string, use min()
            - make shorter strings
            - for each character:
                - if chars are not equal,
                    - increment count
            - return int
        '''
        # shorten strings as necessary
        shorter_length = min(len(self._sequence), len(compare_seq))
        
        # compare strings
        count = 0
        for char1, char2 in zip(self._sequence[:shorter_length],
                                compare_seq  [: shorter_length]):
            if char1 != char2:
                count += 1
        return count


