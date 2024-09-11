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
    
    def hamming_distance(self, short_compare_seq:str):
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
        shorter_length = min(len(self._sequence), len(short_compare_seq))
        short_seq = self._sequence[: shorter_length]
        short_compare_seq = short_compare_seq[: shorter_length]
        
        # compare strings
        count_of_differences = 0
        for idx, char in enumerate(short_seq):
            if char != short_compare_seq[idx]:
                count_of_differences += 1
        return count_of_differences


