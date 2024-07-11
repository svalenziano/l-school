'''
https://www.codewars.com/kata/54e6533c92449cc251001667/train/python

P
    INPUT: sequence --> list or string
    OUTPUT: 
    REQS
        EX:
            - accepts strings, lists
        IMP
            - must work for any type of sequence or sequence-like object, including strings?
    Q's
        See 'implicit' above
E
    See below
D
    List - convert argument into list (see below)
A
    - convert input into list using list()... prevents errors with immutable
        types such as tuples or strings
    - pop first element of `lst` and append to `result`
    - for each element in `lst`
        - if that element isn't identical to the last element in `result`:
            - append the element to `result`
    - return `result`
C
'''

def unique_in_order(seq):
    seq = list(seq)
    result = seq.pop(0)



print(unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'])
print(unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D'])
print(unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3])
print(unique_in_order((1, 2, 2, 3, 3))   == [1, 2, 3])