'''
RESULT = 🟢 DONE IN 14 MINS.  Had a bit of trouble but adding print statements 
            enabled me to track down the problem.  The problem was that I used
            the length of the `string` to determine the `end_idx` instead of the 
            length of the `substring`.  Compare the below to line 37.
                
                end_idx = start_idx + len(string)

P
    INPUT = 2 strings
    OUTPUT = Integer.  Number of times that 2nd string occurs in first string
    REQS
        EX
            oVERLAPPING STRINGS don't count: `babab` contains 1 instance of `bab`, not 2
        IMPLICIT
            Don't use the built-in `str.count` method
E
D
    integer (count)
    string (reassigned to remove found substrings)
A
    v1
        INIT count at 0
        while the substring is in the string (use `in` to test for membership)
            use the built-in find to find the first instance of the substr
            remove that substr from the string
            increment count
        return count

'''

def count_substrings(string, substring):
    #print('INPUT STRING = ', string)
    count = 0
    while substring in string:
        start_idx = string.find(substring)
        #print('start idx = ', start_idx)
        end_idx = start_idx + len(substring)
        #print('end idx = ', end_idx)
        string = string[:start_idx] + string[end_idx:]
        #print('string = ',string)
        count += 1
    #print('count = ', count)
    return count


print(count_substrings('babab', 'bab') == 1)
print(count_substrings('babab', 'ba') == 2)
print(count_substrings('babab', 'b') == 3)
print(count_substrings('babab', 'x') == 0)
print(count_substrings('babab', 'x') == 0)
print(count_substrings('', 'x') == 0)
print(count_substrings('bbbaabbbbaab', 'baab') == 2)
print(count_substrings('bbbaabbbbaab', 'bbaab') == 2)
print(count_substrings('bbbaabbbbaabb', 'bbbaabb') == 1)