'''
Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).
'''

'''
P
    Log the longest sentence and its word count, including the sentence-ending punctuation.
    Explicit
        - End of sentence chars = [.!?]
        - Word = any sequence of chars that's not spaces or sentence ending chars
            - "--" counts as a word
        - Sentences may include tabs and other types of whitespace
    Implicit
        - Longest sentence = largest number of words (NOT largest number of characters)
        - Newlines count as whitespace
    
E
    
    "Where do you think you're going? What's up, Doc?"

    Where do you think you're going
    What's up, Doc

    {
    'sentence': 'Where do you think you're going'
    'words': ['Where', 'do', 'you', 'think', 'you're', 'going']
    'punctuation': '?'
    },
    {
    ...
    }

    

D
    
    LIST OF SENTENCE OBJECTS
        
            
A
    SENTENCE SPLIT METHOD
        - For each character
            - if character is in MARKS
                - return two sentences
    
    V1
    - Create list of single Sentence
    - For each Sentence in the list:  [THIS MAY CAUSE MUTATION DURING ITERATION PROBLEMS?]
        - if a sentence has punctuation in the string
            - remove the sentence and replace it with two separate sentences (pop and insert)
        - you should now 

    V2
    - sentences = []
    - Iterate through string
    - While idx < len(string):
        - If punctuation is encountered:
            - Create a sentence from the first half (string slicing)
            - append sentence to `sentences`
            - update the string to the value of the 2nd half
            - reset idx to 0
        - idx += 1

        - While the Sentence has > 0 punctuation
            - Find the first period
            - Instantiate two sentences
            - Replace the original sentence with the two sentences (use `insert()` list method)
            - Repeat until all periods are removed
            - Repeat for all other punctuation marks
        - You now have a list of Sentences, each of them containing zero punctuation
    - Sort the list of Sentences with key=`word_count`  
    - Print:
        - the longest sentence
        - a message explaining the longest sentence


C
'''



class Sentence:
    MARKS = ['.', '!', '?']

    def __init__(self, string:str):
        def ends_with_punctuation(string):
            for mark in Sentence.MARKS:
                if string.endswith(mark):
                    return True
            return False
        string = string.strip()
        if ends_with_punctuation(string):
            self._string = string[:-1]
            self._final_punctuation = string[-1]
        else:
            self._string = string
            self._final_punctuation = None

    @property
    def qty_punctuation(self):
        pass

    @property
    def final_punctuation(self):
        return self._final_punctuation
    
    @property
    def word_count(self):
        return len(self._string.split())

    @property
    def first_period(self):
        return self._string.find('.')

    @property
    def sentence_w_final_punctuation(self):
        result = self._string
        if self.final_punctuation:
            result = result + self.final_punctuation
        return result
    
    @property
    def sentence_without_final_punctuation(self):
        return self._string

    @property
    def short_version(self):
        length = 15
        if len(self._string) > length:
            return self._string[:length] + '...'  # return first x characters
        else:
            return self._string

    def __str__(self):
        return self.sentence_w_final_punctuation


def longest_sentence(string:str):

    def print_sentences():
        for sentence in sentences:
            print(sentence.sentence_w_final_punctuation)
    
    def word_count(sentence:Sentence):
        return sentence.word_count

    MARKS = ['.', '!', '?']
    sentences = []

    idx = 0
    while idx < len(string):
        character = string[idx]
        if character in MARKS:
            next_char_idx = idx + 1
            first_half = string[: next_char_idx]
            second_half = string[next_char_idx:]
            sentences.append(Sentence(first_half))
            string = second_half
            idx = 0
        idx += 1
    
    longest = sorted(sentences, key=word_count, reverse=True)[0]
    
    print()
    print(longest)
    print()
    print(f"The longest sentence has {longest.word_count} words.")

    # print_sentences()

def sv_tests():
    def print_sentences(lst):
        print(">>> PRINTING SENTENCES")
        for sentence in lst:
            print(sentence.full_sentence)
        print(">>> DONE PRINTING SENTENCES")

    my_str = "To be or not to be! Is that *the* question? Hello world. Where do 'you' think you're going? What's up, Doc? Proposition that all men are -- created equal. "

    longest_sentence(my_str)
    
    # lst = [Sentence(my_str), Sentence('A big sentence'), Sentence('Final sentence')]
    # print_sentences(lst)

    # lst.remove(lst[1])
    # print_sentences(lst)





# sv_tests()

# LS EXAMPLES
long_text = (
    'Four score and seven years ago our fathers brought forth on this '
    'continent a new nation, conceived in liberty, and dedicated to the '
    'proposition that all men are created equal. Now we are engaged in a '
    'great civil war, testing whether that nation, or any nation so '
    'conceived and so dedicated, can long endure. We are met on a great '
    'battlefield of that war. We have come to dedicate a portion of that '
    'field, as a final resting place for those who here gave their lives '
    'that that nation might live. It is altogether fitting and proper that '
    'we should do this.'
)

longer_text = long_text + (
    'But, in a larger sense, we can not dedicate, we can not consecrate, '
    'we can not hallow this ground. The brave men, living and dead, who '
    'struggled here, have consecrated it, far above our poor power to add '
    'or detract. The world will little note, nor long remember what we say '
    'here but it can never forget what they did here. It is for us the '
    'living, rather, to be dedicated here to the unfinished work which '
    'they who fought here have thus far so nobly advanced. It is rather '
    'for us to be here dedicated to the great task remaining before us -- '
    'that from these honored dead we take increased devotion to that '
    'cause for which they gave the last full measure of devotion -- that '
    'we here highly resolve that these dead shall not have died in vain '
    '-- that this nation, under God, shall have a new birth of freedom -- '
    'and that government of the people, by the people, for the people, '
    'shall not perish from the earth.'
)





def ls_tests():

    longest_sentence(long_text)
    # Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
    #
    # The longest sentence has 30 words.

    longest_sentence(longer_text)
    # It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
    #
    # The longest sentence has 86 words.

    longest_sentence("Where do you think you're going? What's up, Doc?")
    # Where do you think you're going?
    #
    # The longest sentence has 6 words.

    longest_sentence("To be or not to be! Is that the question?")
    # To be or not to be!
    #
    # The longest sentence has 6 words.

ls_tests()